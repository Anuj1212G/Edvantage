import express from 'express';

const router = express.Router();

// Contact form submission
router.post('/', (req, res) => {
  try {
    const { name, email, phone, areaOfInterest, message, company } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-reply to user

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      areaOfInterest,
      message,
      timestamp: new Date().toISOString(),
      ip: req.ip
    });

    // Simulate processing time
    setTimeout(() => {
      res.json({
        success: true,
        message: 'Thank you for your inquiry. Our team will contact you within 24 hours.',
        data: {
          contactId: `CONTACT-${Date.now()}`,
          submittedAt: new Date().toISOString()
        }
      });
    }, 500);

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to process contact form',
      message: error.message
    });
  }
});

// Get quote request
router.post('/quote', (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      programType, 
      participants, 
      timeline, 
      requirements,
      budget 
    } = req.body;

    // Basic validation
    if (!name || !email || !company || !programType) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, company, and program type are required'
      });
    }

    console.log('Quote request:', {
      name,
      email,
      phone,
      company,
      programType,
      participants,
      timeline,
      requirements,
      budget,
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'Quote request submitted successfully. Our consultancy team will prepare a customized proposal for you.',
      data: {
        quoteId: `QUOTE-${Date.now()}`,
        estimatedResponseTime: '2-3 business days',
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to process quote request',
      message: error.message
    });
  }
});

// Newsletter subscription
router.post('/newsletter', (req, res) => {
  try {
    const { email, preferences } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    console.log('Newsletter subscription:', {
      email,
      preferences: preferences || ['general'],
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      data: {
        subscriberId: `SUB-${Date.now()}`,
        subscribedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to process newsletter subscription',
      message: error.message
    });
  }
});

export default router;