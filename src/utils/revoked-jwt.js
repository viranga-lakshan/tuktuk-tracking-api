/** In-memory revoked JWT ids (jti) until their natural expiry. Single-process only. */

const revokedJtiUntilMs = new Map();

function revokeJti(jti, expUnixSec) {
  if (!jti || typeof expUnixSec !== 'number') return;
  revokedJtiUntilMs.set(jti, expUnixSec * 1000);
}

function isJtiRevoked(jti) {
  if (!jti) return false;
  const untilMs = revokedJtiUntilMs.get(jti);
  if (untilMs == null) return false;
  if (Date.now() >= untilMs) {
    revokedJtiUntilMs.delete(jti);
    return false;
  }
  return true;
}

module.exports = {
  revokeJti,
  isJtiRevoked,
};
