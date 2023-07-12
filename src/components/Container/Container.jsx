import Contacts from 'components/Contacts/Contacts';
import ContactForm from 'components/ContactForm/ContactForm';
import PropTypes from 'prop-types';
import { Section } from './ContainerStyled';
import Filter from 'components/Filter/Filter';

function Container({
  formAddContact,
  value,
  handleOnChangeFilter,
  filteredContact,
  contactsArr,
  onRemoveContact,
}) {
  
  return (
    <Section>
      <h1>Phonebook</h1>

      <ContactForm formAddContact={formAddContact}
       contactsArr={contactsArr}
       />
      <h2>Contacts</h2>     
      <Filter
       value={value}
       handleOnChangeFilter={handleOnChangeFilter} />      
      <Contacts
        filteredContact={filteredContact}
        onRemoveContact={onRemoveContact}
        value={value}
        handleOnChangeFilter={handleOnChangeFilter}
      />
    </Section>
  );
}

Container.propTypes = {
  formAddContact: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleOnChangeFilter: PropTypes.func.isRequired,
    filteredContact: PropTypes.array.isRequired,
    contactsArr: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired

};

export default Container;
