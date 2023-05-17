export function isAllowedToDrive(ageInYears, hasLicence) {
  if (ageInYears >= 18 && hasLicence) return true;

  return false;
}
