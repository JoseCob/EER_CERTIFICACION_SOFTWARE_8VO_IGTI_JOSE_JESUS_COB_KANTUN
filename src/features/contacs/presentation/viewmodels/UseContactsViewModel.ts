import { useEffect } from 'react';
import { UseContactsPermissionStore } from '../store/ContactsPermissionStore';

//Conecta la vista con la lógica del store para obtener los contactos
export function useContactsViewModel() {
  //Obtenemos los campos de la función del store (permisos del contacto)
  const { contacts, permissionDenied, fetchContacts } = UseContactsPermissionStore();

  //Ejecuta la consulta de obtener los datos del contacto en tiempo real mediante el store(zustand)
  useEffect(() => {
    fetchContacts(); // Ejecuta cuando la vista se monta
  }, []);

  return { contacts, permissionDenied };
}
