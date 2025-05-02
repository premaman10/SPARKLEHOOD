const mongoose = require('mongoose');
const Incident = require('./models/Incident');

mongoose.connect('mongodb://localhost:27017/ai_safety_incidents')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const sampleIncidents = [
  {
    title: 'AI System Bias in Hiring Process',
    description: 'An AI recruitment system showed significant gender bias in candidate selection, favoring male candidates over equally qualified female candidates.',
    severity: 'High',
    reported_at: new Date('2024-01-15')
  },
  {
    title: 'Privacy Breach in AI Chat System',
    description: 'Users reported that an AI chat system was occasionally revealing personal information from previous conversations to other users.',
    severity: 'Medium',
    reported_at: new Date('2024-01-20')
  },
  {
    title: 'AI Translation Error',
    description: 'Minor mistranslation in medical terms by an AI translation system, caught before any impact on patient care.',
    severity: 'Low',
    reported_at: new Date('2024-01-25')
  }
];

async function seedDatabase() {
  try {
    // Clear existing incidents
    await Incident.deleteMany({});
    
    // Insert sample incidents
    await Incident.insertMany(sampleIncidents);
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}

seedDatabase(); 