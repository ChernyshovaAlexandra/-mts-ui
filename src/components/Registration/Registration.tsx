import { FC, useState, useId } from "react";
import Modal from "../Modal/Modal";
import Input from "../FormItems/Input/Input";
import Checkbox from "../FormItems/Checkbox/Checkbox";
import Link from "../Link/Link";
import { Select, SelectOption } from "../FormItems/Select/Select";
import { Button } from "../Button/Button";

export interface RegistrationFormData {
  email: string;
  name: string;
  age: string;
  region: string;
  nickname: string;
  password: string;
}

export interface RegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: RegistrationFormData) => void;
  ages?: SelectOption[];
  regions?: SelectOption[];
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_MIN = 6;

const Registration: FC<RegistrationProps> = ({
  isOpen,
  onClose,
  onSubmit,
  ages,
  regions,
}) => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegistrationFormData, string>>
  >({});

  const validate = () => {
    const next: Partial<Record<keyof RegistrationFormData, string>> = {};
    if (!email.trim()) next.email = "Введите email";
    else if (!EMAIL_RE.test(email)) next.email = "Некорректный формат email";
    if (!name.trim()) next.name = "Введите имя и фамилию";
    if (ages && !age) next.age = "Выберите возраст";
    if (regions && !region) next.region = "Выберите регион";
    if (!nickname.trim()) next.nickname = "Введите никнейм";
    if (!password) next.password = "Введите пароль";
    else if (password.length < PASSWORD_MIN)
      next.password = `Минимум ${PASSWORD_MIN} символов`;
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    onSubmit?.({ email, name, age, region, nickname, password });
  };

  const groupLabel =
    ages && regions
      ? "Возраст и регион"
      : ages
        ? "Возраст"
        : "Регион";

  return (
    <Modal
      isModalOpen={isOpen}
      handleClose={onClose}
      title="Регистрация"
      showCloseButton
    >
      <form
        onSubmit={handleSubmit}
        aria-label="Форма регистрации"
        noValidate
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <Input
          id={`${id}-email`}
          name="email"
          label="Email"
          placeholder="email@example.com"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={errors.email}
          required
        />
        <Input
          id={`${id}-name`}
          name="name"
          label="Имя и фамилия ребёнка"
          placeholder="Имя Фамилия"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          errorMessage={errors.name}
          required
        />

        {(ages || regions) && (
          <div
            role="group"
            aria-label={groupLabel}
            style={{ display: "flex", gap: 12 }}
          >
            {ages && (
              <Select
                name="age"
                onChange={(_, value) => setAge(value)}
                value={age}
                label="Возраст ребёнка"
                options={ages}
                errorMessage={errors.age}
                required
                id={`${id}-age`}
              />
            )}
            {regions && (
              <Select
                name="region"
                onChange={(_, value) => setRegion(value)}
                value={region}
                label="Регион"
                options={regions}
                errorMessage={errors.region}
                required
                id={`${id}-region`}
              />
            )}
          </div>
        )}

        <Input
          id={`${id}-nickname`}
          name="nickname"
          label="Придумай никнейм"
          autoComplete="username"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          errorMessage={errors.nickname}
          required
        />
        <Input
          id={`${id}-password`}
          name="password"
          label="Придумай пароль"
          type="password"
          autoComplete="new-password"
          minLength={PASSWORD_MIN}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errors.password}
          required
        />
        <Checkbox
          name={`${id}-consent`}
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          label={
            <>
              С правилами акции ознакомлен(-а) и даю согласие на{" "}
              <Link url="#">обработку персональных данных</Link>
            </>
          }
        />

        <Button
          buttonType="submit"
          variant="primary"
          width="max"
          disabled={!agreed}
          aria-label="Отправить форму регистрации"
        >
          Зарегистрироваться
        </Button>
      </form>
    </Modal>
  );
};

export default Registration;
