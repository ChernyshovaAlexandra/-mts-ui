import { FC, useState } from "react";
import Modal from "../Modal/Modal";
import Input from "../FormItems/Input/Input";
import Checkbox from "../FormItems/Checkbox/Checkbox";
import Link from "../Link/Link";
import { Select, SelectOption } from "../FormItems/Select/Select";

export interface RegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  ages?: SelectOption[];
  regions?: SelectOption[];
}

const Registration: FC<RegistrationProps> = ({
  isOpen,
  onClose,
  ages,
  regions,
}) => {
  const [agreed, setAgreed] = useState(false);
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = () => {
    // тут будет логика отправки
    console.log("Регистрация отправлена");
  };

  return (
    <Modal isModalOpen={isOpen} handleClose={onClose} title="Регистрация">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: "1.3rem",
        }}
      >
        <Input placeholder="email@example.com" />
        <Input label="Имя и фамилия ребёнка" placeholder="Имя Фамилия" />
        {ages || regions ? (
          <div style={{ display: "flex", gap: 12 }}>
            {ages ? (
              <Select
                name="age"
                onChange={setAge}
                value={age}
                label="Возраст ребёнка"
                options={ages}
              />
            ) : (
              <></>
            )}
            {regions ? (
              <Select
                name="region"
                onChange={setRegion}
                value={region}
                label="Возраст ребёнка"
                options={regions}
              />
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <Input label="Придумай никнейм" placeholder="Никнейм" />
        <Input label="Придумай пароль" placeholder="Пароль" type="password" />
        <Checkbox
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          label={
            <>
              С правилами акции ознакомлен(-а) и даю согласие на{" "}
              <Link
                url="#"
                style={{ color: "#007AFF", textDecoration: "underline" }}
              >
                обработку персональных данных
              </Link>
            </>
          }
        />
      </form>
    </Modal>
  );
};

export default Registration;
