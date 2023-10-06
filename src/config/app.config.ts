interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Teacher'],
  customerRoles: ['Customer'],
  tenantRoles: ['School Administrator', 'Teacher', 'Parent', 'Student'],
  tenantName: 'School',
  applicationName: 'Student Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read course information',
    'Read school information',
    'Read teacher information',
    'Read student information',
  ],
  ownerAbilities: [
    'Manage teacher information',
    'Manage course information',
    'View student information',
    'View school information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1008d96f-3c3e-4e53-8235-012797db56c9',
};
