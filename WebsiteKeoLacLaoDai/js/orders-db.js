/* =====================================================
   ORDER.JS – Quick Buy form with localStorage
   ===================================================== */

const ORDER_STORAGE_KEY = 'keolac_orders';

/**
 * Save an order to localStorage
 */
function saveOrder(orderData) {
  const orders = getOrders();
  orders.unshift(orderData); // newest first
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

/**
 * Load all orders from localStorage
 */
function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

/**
 * Delete an order by ID
 */
function deleteOrder(id) {
  const orders = getOrders().filter(o => o.id !== id);
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

/**
 * Update order status
 */
function updateOrderStatus(id, status) {
  const orders = getOrders().map(o => o.id === id ? { ...o, status } : o);
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

/**
 * Generate unique order ID: LD-YYYYMMDD-XXXX
 */
function generateOrderId() {
  const now = new Date();
  const datePart = now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0');
  const rand = Math.floor(Math.random() * 9000 + 1000);
  return `LD-${datePart}-${rand}`;
}

// Export for use in other scripts
window.OrderDB = { saveOrder, getOrders, deleteOrder, updateOrderStatus, generateOrderId };
