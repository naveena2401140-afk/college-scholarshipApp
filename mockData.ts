
import { User, UserRole, Scholarship, Application, ScholarshipType, Notification, AdminReminder } from './types';

// Current Timestamp for relative deadlines
const NOW = Date.now();
const DAY = 86400000;

export const MOCK_USERS: User[] = [
  // Institutional Admin
  { 
    id: 'admin1', 
    name: 'System Admin', 
    role: UserRole.ADMIN, 
    department: 'Administration', 
    email: 'admin@srec.com', 
    password: 'admin123' 
  }
];

export const MOCK_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'sch1',
    name: 'CSE Merit Excellence',
    description: 'Awarded to Computer Science students with outstanding academic performance.',
    amount: 50000,
    type: ScholarshipType.INSTITUTIONAL,
    departmentEligibility: 'Computer Science Engineering',
    createdAt: NOW - (DAY * 5),
    deadline: NOW + (DAY * 30),
    isActive: true
  },
  {
    id: 'sch2',
    name: 'IT Innovation Grant',
    description: 'Grant for Information Technology students working on innovative projects.',
    amount: 45000,
    type: ScholarshipType.INSTITUTIONAL,
    departmentEligibility: 'Information Technology',
    createdAt: NOW - (DAY * 2),
    deadline: NOW + (DAY * 20),
    isActive: true
  },
  {
    id: 'sch_gov_1',
    name: 'National Scholarship Portal (NSP)',
    description: 'Central sector scheme of scholarships for college and university students.',
    amount: 25000,
    type: ScholarshipType.GOVERNMENT,
    departmentEligibility: 'All',
    createdAt: NOW - (DAY * 10),
    deadline: NOW + (DAY * 45),
    isActive: true
  }
];

export const MOCK_APPLICATIONS: Application[] = [];

export const MOCK_NOTIFICATIONS: Notification[] = [];

export const MOCK_REMINDERS: AdminReminder[] = [];
