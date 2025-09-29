import express from 'express';
import { programsData } from '../models/programsData.js';

const router = express.Router();

// Get all programs
router.get('/', (req, res) => {
  try {
    const { category, search, limit } = req.query;
    let filteredPrograms = [...programsData];

    // Filter by category
    if (category && category !== 'all') {
      filteredPrograms = filteredPrograms.filter(program => 
        program.category === category
      );
    }

    // Search functionality
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredPrograms = filteredPrograms.filter(program =>
        program.title.toLowerCase().includes(searchTerm) ||
        program.overview.toLowerCase().includes(searchTerm) ||
        program.targetAudience.some(audience => 
          audience.toLowerCase().includes(searchTerm)
        )
      );
    }

    // Limit results
    if (limit) {
      filteredPrograms = filteredPrograms.slice(0, parseInt(limit));
    }

    res.json({
      success: true,
      data: filteredPrograms,
      total: filteredPrograms.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch programs',
      message: error.message
    });
  }
});

// Get program by ID
router.get('/:id', (req, res) => {
  try {
    const program = programsData.find(p => p.id === req.params.id);
    
    if (!program) {
      return res.status(404).json({
        success: false,
        error: 'Program not found'
      });
    }

    res.json({
      success: true,
      data: program
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch program',
      message: error.message
    });
  }
});

// Get program categories
router.get('/meta/categories', (req, res) => {
  try {
    const categories = [...new Set(programsData.map(p => p.category))];
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
      message: error.message
    });
  }
});

// Program enrollment endpoint
router.post('/:id/enroll', (req, res) => {
  try {
    const { name, email, phone, company, experience } = req.body;
    const program = programsData.find(p => p.id === req.params.id);
    
    if (!program) {
      return res.status(404).json({
        success: false,
        error: 'Program not found'
      });
    }

    // In a real application, this would save to database
    // For now, we'll just return success
    console.log('Enrollment request:', {
      program: program.title,
      student: { name, email, phone, company, experience },
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'Enrollment request submitted successfully',
      data: {
        programId: req.params.id,
        programTitle: program.title,
        enrollmentId: `ENR-${Date.now()}`
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to process enrollment',
      message: error.message
    });
  }
});

export default router;