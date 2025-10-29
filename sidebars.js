// @ts-check
import { webAppWorkflowSidebar } from './docs/sidebars/webAppWorkflowSidebar';
import { feDevelopmentSidebar } from './docs/sidebars/feDevelopmentSidebar';
import { versionManagementSidebar } from './docs/sidebars/versionManagementSidebar';
import { apiSidebar } from './docs/sidebars/apiSidebar';
import { beSidebar } from './docs/sidebars/beSidebar';





// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const sidebars = {
  webAppWorkflowSidebar,
  feDevelopmentSidebar,
  versionManagementSidebar,
  apiSidebar,
  beSidebar,
};

export default sidebars;
