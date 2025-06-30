// viewmodels/useContactsViewModel.ts
import { useEffect } from 'react';
import { UseContactsPermissionStore } from '../store/ContactsPermissionStore';

export function useContactsViewModel() {
  const { contacts, permissionDenied, fetchContacts } = UseContactsPermissionStore();

  useEffect(() => {
    fetchContacts(); // Ejecuta cuando la vista se monta
  }, []);

  return { contacts, permissionDenied };
}
