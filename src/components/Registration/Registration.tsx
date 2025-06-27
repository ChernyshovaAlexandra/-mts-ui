import { FC, useState, useId } from "react";
import Modal from "../Modal/Modal";
import Input from "../FormItems/Input/Input";
import Checkbox from "../FormItems/Checkbox/Checkbox";
import Link from "../Link/Link";
import { Select, SelectOption } from "../FormItems/Select/Select";
import { Button } from "../Button/Button";

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
  const id = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // логика отправки
    console.log("Регистрация отправлена");
  };

  return (
    <Modal isModalOpen={isOpen} handleClose={onClose} title="Регистрация">
      <form
        onSubmit={handleSubmit}
        aria-label="Форма регистрации"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: "1.3rem",
        }}
      >
        <Input
          id={`${id}-email`}
          placeholder="email@example.com"
          type="email"
          aria-label="Email"
          required
        />
        <Input
          id={`${id}-name`}
          label="Имя и фамилия ребёнка"
          placeholder="Имя Фамилия"
          required
        />

        {(ages || regions) && (
          <div
            role="group"
            aria-label="Возраст и регион"
            style={{ display: "flex", gap: 12 }}
          >
            {ages && (
              <Select
                name="age"
                onChange={setAge}
                value={age}
                label="Возраст ребёнка"
                options={ages}
                required
                id={`${id}-age`}
              />
            )}
            {regions && (
              <Select
                name="region"
                onChange={setRegion}
                value={region}
                label="Регион"
                options={regions}
                required
                id={`${id}-region`}
              />
            )}
          </div>
        )}

        <Input
          id={`${id}-nickname`}
          label="Придумай никнейм"
          placeholder="Никнейм"
          required
        />
        <Input
          id={`${id}-password`}
          label="Придумай пароль"
          placeholder="Пароль"
          type="password"
          required
        />
        <Checkbox
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          label={
            <>
              С правилами акции ознакомлен(-а) и даю согласие на{" "}
              <Link url="#">обработку персональных данных</Link>
            </>
          }
          required
        />

        <Button
          type="submit"
          variant="primary"
          width="auto"
          disabled={!agreed}
          aria-disabled={!agreed}
          aria-label="Отправить форму регистрации"
        >
          Зарегистрироваться
        </Button>
      </form>
    </Modal>
  );
};

export default Registration;
