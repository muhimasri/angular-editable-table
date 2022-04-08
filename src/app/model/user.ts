export interface User {
  isSelected: boolean;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  isEdit: boolean;
}

export const UserColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'firstName',
    type: 'text',
    label: 'First Name',
    required: true,
  },
  {
    key: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    pattern: '.+@.+',
  },
  {
    key: 'birthDate',
    type: 'date',
    label: 'Date of Birth',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
