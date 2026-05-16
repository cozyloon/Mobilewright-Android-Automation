const { test, expect } = require('@mobilewright/test');

test('app launches and shows home screen', async ({ screen, device }) => {
  await expect(screen.getByText('General Store')).toBeVisible();
});
