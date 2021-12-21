import { ChangeEvent, useState } from "react";
import Card from "../../components/Card";
import TextInput from "../../components/TextInput";
import styles from "./BookingForm.module.css";
import { ICustomer } from "../../models/Customer";
import Button from "../../components/Button";
import { nameValidation } from "../../utils/nameValidation";
import { emailValidation } from "../../utils/emailValidation";
import { isStringEmpty } from "../../utils/notEmptyStringValidation";

const BookingForm = () => {
  const [customer, setCustomer] = useState<ICustomer>({
    name: "",
    lastName: "",
    secondLastName: "",
    address: "",
    email: "",
  });

  const isValidForm = (): boolean => {
    const { name, lastName, secondLastName, address, email } = customer;

    if (
      !nameValidation(name) ||
      !nameValidation(lastName) ||
      !nameValidation(secondLastName) ||
      isStringEmpty(address) ||
      !emailValidation(email)
    ) {
      return false;
    }

    return true;
  };

  const handleCustomerInformation = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const handleConfirmBooking = (): void => {};

  console.log(isValidForm());

  return (
    <Card containerClass={styles.bookingFormContainer} softCard>
      <div className={styles.bookingFormTitle}>
        ¡Confirma la reservación de tu viaje!
      </div>
      <div className={styles.bookingFormSubTitle}>
        Ingresa tus datos personales
      </div>
      <div className={styles.bookingFormNameInputs}>
        <TextInput
          value={customer.name}
          name="name"
          label="Nombre"
          error={!!customer.name && !nameValidation(customer.name)}
          containerClassName={styles.bookingFromInputContainer}
          errorMessage="Ingresa un nombre válido"
          onChange={handleCustomerInformation}
          required
        />
        <TextInput
          value={customer.secondLastName}
          name="secondLastName"
          label="Apellido Paterno"
          containerClassName={styles.bookingFromInputContainer}
          error={
            !!customer.secondLastName &&
            !nameValidation(customer.secondLastName)
          }
          errorMessage="Ingresa un nombre válido"
          onChange={handleCustomerInformation}
        />
        <TextInput
          value={customer.lastName}
          name="lastName"
          label="Apellido Materno"
          containerClassName={styles.bookingFromInputContainer}
          error={!!customer.lastName && !nameValidation(customer.lastName)}
          errorMessage="Ingresa un nombre válido"
          onChange={handleCustomerInformation}
        />
      </div>
      <TextInput
        value={customer.email}
        name="email"
        label="Correo electrónico"
        containerClassName={styles.bookingFormInputs}
        error={!!customer.email && !emailValidation(customer.email)}
        errorMessage="Ingresa un correo válido"
        onChange={handleCustomerInformation}
      />
      <TextInput
        value={customer.address}
        name="address"
        label="Dirección"
        containerClassName={styles.bookingFormInputs}
        error={!!customer.address && isStringEmpty(customer.address)}
        errorMessage="Ingresa un correo válido"
        onChange={handleCustomerInformation}
      />
      <Button disabled={!isValidForm()} onClick={handleConfirmBooking}>
        Confirmar Reservación
      </Button>
    </Card>
  );
};

export default BookingForm;
