document.addEventListener('DOMContentLoaded', function() {
  // Select the necessary elements
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const close = document.querySelector('.close');

  const featuresLink = document.querySelector('.features-link');
  const featuresDropdown = document.querySelector('.features-dropdown');
  const featuresArrowDown = document.querySelector('.features-arrow-down');
  const featuresArrowUp = document.querySelector('.features-arrow-up');

  const mobileFeaturesLink = document.querySelector('.mobile-features-link');
  const mobileFeaturesDropdown = document.querySelector('.mobile-features-dropdown');
  const mobileFeaturesArrowDown = document.querySelector('.mobile-features-arrow-down');
  const mobileFeaturesArrowUp = document.querySelector('.mobile-features-arrow-up');

  const companyLink = document.querySelector('.company-link');
  const companyDropdown = document.querySelector('.company-dropdown');
  const companyArrowDown = document.querySelector('.company-arrow-down');
  const companyArrowUp = document.querySelector('.company-arrow-up');

  const mobileCompanyLink = document.querySelector('.mobile-company-link');
  const mobileCompanyDropdown = document.querySelector('.mobile-company-dropdown');
  const mobileCompanyArrowDown = document.querySelector('.mobile-company-arrow-down');
  const mobileCompanyArrowUp = document.querySelector('.mobile-company-arrow-up');

  // Initialize the state
  function initializeState() {
    featuresArrowUp.classList.add('hidden');
    featuresDropdown.classList.remove('active');
    featuresArrowDown.classList.remove('hidden');
    mobileFeaturesArrowUp.classList.add('hidden');
    mobileFeaturesDropdown.classList.remove('active');
    mobileFeaturesArrowDown.classList.remove('hidden');

    companyArrowUp.classList.add('hidden');
    companyDropdown.classList.remove('active');
    companyArrowDown.classList.remove('hidden');

    mobileCompanyArrowUp.classList.add('hidden');
    mobileCompanyDropdown.classList.remove('active');
    mobileCompanyArrowDown.classList.remove('hidden');

    sidebar.classList.remove('active');
    close.style.display = 'none';
    if (window.innerWidth <= 875) {
      hamburger.style.display = 'block';
    } else {
      hamburger.style.display = 'none';
    }
  }

  // Handle sidebar toggle
  hamburger.addEventListener('click', function() {
    sidebar.classList.add('active');
    hamburger.style.display = 'none';
    close.style.display = 'block';
  });

  close.addEventListener('click', function () {
    sidebar.classList.remove('active');
    if (window.innerWidth <= 875) {
      hamburger.style.display = 'block';
    }
    close.style.display = 'none';
  });

  // Handle dropdown toggle for Features
  featuresLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    featuresDropdown.classList.toggle('active');
    featuresArrowDown.classList.toggle('hidden');
    featuresArrowUp.classList.toggle('hidden');

    // Close the company dropdown if it's open
    if (companyDropdown.classList.contains('active')) {
      companyDropdown.classList.remove('active');
      companyArrowDown.classList.remove('hidden');
      companyArrowUp.classList.add('hidden');
    }
  });

   // Handle dropdown toggle for Mobile Features
   mobileFeaturesLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    mobileFeaturesDropdown.classList.toggle('active');
    mobileFeaturesArrowDown.classList.toggle('hidden');
    mobileFeaturesArrowUp.classList.toggle('hidden');

    // Close the mobile company dropdown if it's open
    if (mobileCompanyDropdown.classList.contains('active')) {
      mobileCompanyDropdown.classList.remove('active');
      mobileCompanyArrowDown.classList.remove('hidden');
      mobileCompanyArrowUp.classList.add('hidden');
    }
  });

  // Handle dropdown toggle for Company
  companyLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    companyDropdown.classList.toggle('active');
    companyArrowDown.classList.toggle('hidden');
    companyArrowUp.classList.toggle('hidden');

    // Close the features dropdown if it's open
    if (featuresDropdown.classList.contains('active')) {
      featuresDropdown.classList.remove('active');
      featuresArrowDown.classList.remove('hidden');
      featuresArrowUp.classList.add('hidden');
    }
  });


   // Handle dropdown toggle for Company Mobile
   mobileCompanyLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    mobileCompanyDropdown.classList.toggle('active');
    mobileCompanyArrowDown.classList.toggle('hidden');
    mobileCompanyArrowUp.classList.toggle('hidden');

    // Close the features mobile dropdown if it's open
    if (mobileFeaturesDropdown.classList.contains('active')) {
      mobileFeaturesDropdown.classList.remove('active');
      mobileFeaturesArrowDown.classList.remove('hidden');
      mobileFeaturesArrowUp.classList.add('hidden');
    }
  });

  // Listen for changes in the viewport width
  function handleViewportChange() {
    if (window.innerWidth > 875) {
      initializeState();
    } else {
      // Ensure hamburger and sidebar state are correctly updated for mobile
      if (!sidebar.classList.contains('active')) {
        hamburger.style.display = 'block';
      }
    }
  }

  // Set up the event listener for viewport changes
  window.addEventListener('resize', handleViewportChange);

  // Initialize the state on page load
  initializeState();
});
