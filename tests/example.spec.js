const { test, expect } = require('@mobilewright/test');

test.beforeEach(async ({ device, bundleId }) => {
  // List available devices to verify connection
  const devices = await device.listApps().catch(() => []);
  console.log('Connected apps:', devices);
  
  // Clean install: terminate + launch fresh
  await device.terminateApp(bundleId).catch(() => {});
  await device.launchApp(bundleId);
});

test('inspect app locators', async ({ screen, bundleId }) => {
  // Inspect the tree
  const tree = await screen.viewTree();
  console.log(JSON.stringify(tree, null, 2));
});