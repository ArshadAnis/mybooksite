
// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth reveal animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Add typing effect to the hero title
  const heroTitle = document.querySelector('.hero-content h1');
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      heroTitle.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  setTimeout(typeWriter, 500);

  // Add hover effect to skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add click animation to connect buttons
  const connectBtns = document.querySelectorAll('.connect-btn');
  connectBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add gallery image click functionality
  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(image => {
    image.addEventListener('click', function() {
      // Create modal overlay
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
      `;
      
      // Create modal image
      const modalImage = document.createElement('img');
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      modalImage.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      `;
      
      modal.appendChild(modalImage);
      document.body.appendChild(modal);
      
      // Close modal on click
      modal.addEventListener('click', function() {
        document.body.removeChild(modal);
      });
    });
  });

  // Newsletter form handling
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const email = document.getElementById('email').value;
    if (email) {
      // Hide form and show success message
      newsletterForm.style.display = 'none';
      newsletterSuccess.style.display = 'block';
      
      // Add animation
      newsletterSuccess.style.opacity = '0';
      newsletterSuccess.style.transform = 'translateY(20px)';
      setTimeout(() => {
        newsletterSuccess.style.transition = 'all 0.5s ease';
        newsletterSuccess.style.opacity = '1';
        newsletterSuccess.style.transform = 'translateY(0)';
      }, 100);
    }
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (name && email && subject && message) {
      // Create SMS message content
      const smsMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;
      
      // Create SMS URL
      const phoneNumber = '+919326722120';
      const encodedMessage = encodeURIComponent(smsMessage);
      const smsUrl = `sms:${phoneNumber}?body=${encodedMessage}`;
      
      // Open SMS app
      window.open(smsUrl, '_self');
      
      // Hide form and show success message
      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
      
      // Add animation
      contactSuccess.style.opacity = '0';
      contactSuccess.style.transform = 'translateY(20px)';
      setTimeout(() => {
        contactSuccess.style.transition = 'all 0.5s ease';
        contactSuccess.style.opacity = '1';
        contactSuccess.style.transform = 'translateY(0)';
      }, 100);
      
      // Scroll to success message
      contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Add animation to testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add('fade-in-up');
  });

  // Add animation to blog cards
  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Form validation feedback
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value.trim() === '' && this.hasAttribute('required')) {
        this.style.borderColor = '#e74c3c';
      } else {
        this.style.borderColor = '#4CAF50';
      }
    });
    
    input.addEventListener('focus', function() {
      this.style.borderColor = '#667eea';
    });
  });

  // Fundraising functionality
  let totalRaised = 0;
  const targetAmount = 1000000; // 10 lakh
  let donorCount = 0;
  
  // Load saved donation data
  if (localStorage.getItem('donationData')) {
    const savedData = JSON.parse(localStorage.getItem('donationData'));
    totalRaised = savedData.totalRaised || 0;
    donorCount = savedData.donorCount || 0;
  }
  
  function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const raisedAmount = document.getElementById('raisedAmount');
    const remainingAmount = document.getElementById('remainingAmount');
    const donorCountElement = document.getElementById('donorCount');
    
    const progressPercentage = (totalRaised / targetAmount) * 100;
    
    if (progressFill) {
      progressFill.style.width = progressPercentage + '%';
    }
    
    if (raisedAmount) {
      raisedAmount.textContent = '₹' + totalRaised.toLocaleString('en-IN');
    }
    
    if (remainingAmount) {
      remainingAmount.textContent = '₹' + (targetAmount - totalRaised).toLocaleString('en-IN');
    }
    
    if (donorCountElement) {
      donorCountElement.textContent = donorCount;
    }
  }
  
  // Initialize progress on page load
  updateProgress();
  
  // Donation amount selection
  const amountBtns = document.querySelectorAll('.amount-btn');
  let selectedAmount = 1000; // default amount
  
  amountBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      amountBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedAmount = parseInt(this.dataset.amount);
    });
  });
  
  // Set default selection
  if (amountBtns.length > 1) {
    amountBtns[1].classList.add('active');
  }
  
  // Payment integration with Razorpay.me fallback
  const donateBtn = document.getElementById('donateBtn');
  if (donateBtn) {
    donateBtn.addEventListener('click', function() {
      // Disable button during processing
      donateBtn.disabled = true;
      donateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      
      // Directly use Razorpay.me link for reliable payment processing
      setTimeout(() => {
        const razorpayMeUrl = `https://razorpay.me/@arshadanis/${selectedAmount}`;
        
        // Show confirmation before redirecting
        const confirmMessage = `You will be redirected to Razorpay to donate ₹${selectedAmount.toLocaleString('en-IN')} for Arshad's educational journey.

This will help support:
• Degree course completion
• PhD in Psychology and Development
• Mental health research

Continue to payment?`;
        
        if (confirm(confirmMessage)) {
          // Open Razorpay.me link in new tab
          window.open(razorpayMeUrl, '_blank');
          
          // Simulate successful donation for progress tracking
          setTimeout(() => {
            const shouldUpdateProgress = confirm('Did you successfully complete the payment? Click OK if yes, Cancel if no.');
            if (shouldUpdateProgress) {
              handlePaymentSuccess({
                razorpay_payment_id: 'razorpay_me_' + Date.now(),
                method: 'razorpay_me'
              });
            }
          }, 5000);
        }
        
        resetDonateButton();
      }, 1000);
    });
  }
  
  function handlePaymentSuccess(response) {
    try {
      // Verify payment on server side in production
      // For now, update local data
      totalRaised += selectedAmount;
      donorCount += 1;
      
      // Save to localStorage with timestamp
      const donationData = {
        totalRaised: totalRaised,
        donorCount: donorCount,
        lastDonation: {
          amount: selectedAmount,
          paymentId: response.razorpay_payment_id,
          timestamp: new Date().toISOString()
        }
      };
      
      localStorage.setItem('donationData', JSON.stringify(donationData));
      
      updateProgress();
      
      // Show success message with payment details
      showSuccessMessage(response.razorpay_payment_id);
      
      // Log for debugging
      console.log('Payment successful:', {
        paymentId: response.razorpay_payment_id,
        amount: selectedAmount
      });
      
    } catch (error) {
      console.error('Error processing successful payment:', error);
      showErrorMessage('Payment was successful but there was an error updating the display. Please contact support.');
    } finally {
      resetDonateButton();
    }
  }
  
  function handlePaymentFailure(response) {
    console.error('Payment failed:', response.error);
    
    let errorMessage = 'Payment failed. ';
    
    switch(response.error.code) {
      case 'BAD_REQUEST_ERROR':
        errorMessage += 'Invalid payment details. Please try again.';
        break;
      case 'GATEWAY_ERROR':
        errorMessage += 'Bank gateway error. Please try again or use a different payment method.';
        break;
      case 'NETWORK_ERROR':
        errorMessage += 'Network error. Please check your internet connection and try again.';
        break;
      default:
        errorMessage += response.error.description || 'Please try again or contact support.';
    }
    
    showErrorMessage(errorMessage);
    resetDonateButton();
  }
  
  function showPaymentFallback() {
    resetDonateButton();
    const fallbackMessage = `Direct Payment Options:

🔗 Razorpay Link: https://razorpay.me/@arshadanis
💰 Amount: ₹${selectedAmount.toLocaleString('en-IN')}
📱 UPI: Pay to +919326722120
📞 Contact: +919326722120 for bank transfer

Thank you for your support!`;
    
    if (confirm(fallbackMessage + '\n\nOpen Razorpay link now?')) {
      window.open(`https://razorpay.me/@arshadanis/${selectedAmount}`, '_blank');
    }
  }
  
  function showSuccessMessage(paymentId) {
    const message = `🎉 Thank you for your generous donation of ₹${selectedAmount.toLocaleString('en-IN')}!

Payment ID: ${paymentId}
Your support means the world to me and brings me closer to my educational goals.

You'll receive a confirmation shortly.`;
    
    alert(message);
  }
  
  function showErrorMessage(message) {
    alert(`❌ ${message}\n\nFor immediate support, please contact: +919326722120`);
  }
  
  function resetDonateButton() {
    if (donateBtn) {
      donateBtn.disabled = false;
      donateBtn.innerHTML = '<i class="fas fa-heart"></i> Support My Journey';
    }
  }

  // UPI Payment Button
  const upiBtn = document.getElementById('upiBtn');
  if (upiBtn) {
    upiBtn.addEventListener('click', function() {
      const upiId = 'arshadanis@paytm'; // Replace with your actual UPI ID
      const amount = selectedAmount;
      const note = `Donation for Arshad's Education - Amount: ₹${amount}`;
      
      // UPI payment URL
      const upiUrl = `upi://pay?pa=${upiId}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
      
      const paymentOptions = `Choose your payment method:

1. 📱 UPI App (Recommended)
2. 🌐 Razorpay Link
3. 📞 Direct Contact

Amount: ₹${amount.toLocaleString('en-IN')}`;
      
      const choice = prompt(paymentOptions + '\n\nEnter 1, 2, or 3:');
      
      switch(choice) {
        case '1':
          // Try to open UPI app
          window.location.href = upiUrl;
          setTimeout(() => {
            const fallback = confirm('If UPI app did not open, would you like to use Razorpay link instead?');
            if (fallback) {
              window.open(`https://razorpay.me/@arshadanis/${amount}`, '_blank');
            }
          }, 3000);
          break;
        case '2':
          window.open(`https://razorpay.me/@arshadanis/${amount}`, '_blank');
          break;
        case '3':
          const contactInfo = `Contact Arshad directly:

📞 Phone: +919326722120
💰 Amount: ₹${amount.toLocaleString('en-IN')}
📧 Purpose: Educational Support

You can also use:
• UPI ID: ${upiId}
• Razorpay: https://razorpay.me/@arshadanis`;
          alert(contactInfo);
          break;
        default:
          return;
      }
      
      // Ask user to confirm payment after some time
      setTimeout(() => {
        const completed = confirm('Did you successfully complete the payment? This helps us track our fundraising progress.');
        if (completed) {
          handlePaymentSuccess({
            razorpay_payment_id: 'upi_' + Date.now(),
            method: 'upi'
          });
        }
      }, 10000);
    });
  }

  // Add CSS for ripple animation and new animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in-up {
      animation: fadeInUp 0.6s ease forwards;
    }
  `;
  document.head.appendChild(style);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});