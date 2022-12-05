// Import Viewport
import Viewport from 'viewport-js';

// Set up Viewport
const viewport = new Viewport({
  width: 'device-width',
  height: 'device-height',
  scale: 1
});

// Listen for events from Viewport
viewport.on('change', (data) => {
  console.log('Viewport changed: ', data);
});

// Export the Viewport instance
export default viewport;
