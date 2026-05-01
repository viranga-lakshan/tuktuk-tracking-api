const fs = require('fs');
const path = require('path');

// Simple file-based audit logger
const auditLogPath = path.join(__dirname, '../../logs/audit.log');

// Ensure logs directory exists
function ensureLogDir() {
  const dir = path.dirname(auditLogPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Log audit event to file with timestamp, actor, action, and details
 */
function logAuditEvent(actor, action, details = {}) {
  ensureLogDir();
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    actor: actor || 'SYSTEM',
    action,
    details,
  };
  
  fs.appendFileSync(
    auditLogPath,
    JSON.stringify(logEntry) + '\n',
    { encoding: 'utf-8' }
  );
}

/**
 * Middleware to add audit logger to request
 */
function auditMiddleware(req, res, next) {
  req.audit = (action, details = {}) => {
    const actor = req.user?.email || req.principal?.deviceId || 'ANONYMOUS';
    logAuditEvent(actor, action, details);
  };
  next();
}

module.exports = {
  auditMiddleware,
  logAuditEvent,
};
