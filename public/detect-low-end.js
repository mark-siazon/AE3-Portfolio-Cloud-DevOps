(function () {
  try {
    var isLowEnd = false;
    // Check for low memory (approx < 4GB)
    if (navigator.deviceMemory && navigator.deviceMemory < 4) isLowEnd = true;
    // Check for low core count (<= 4 cores often indicates older/budget devices)
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      isLowEnd = true;
    // Check for Data Saver mode (user wants lite experience)
    if (navigator.connection && navigator.connection.saveData) isLowEnd = true;

    if (isLowEnd) {
      document.documentElement.classList.add("low-end");
    }
  } catch (e) {}
})();
