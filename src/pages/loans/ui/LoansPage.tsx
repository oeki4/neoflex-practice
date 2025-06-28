import { Container } from "@/shared/ui/Container/Container.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";

export const LoansPage = () => {
  return (
    <Container className="flex justify-between items-center">
      <form className="flex flex-col gap-4 w-[400px]">
        <Input required placeholder="Введите сумму" label="Сумма" />
        <Input required placeholder="Введите срок" label="Срок" />
        <Input required placeholder="Введите доход" label="Ежемесячный доход" />
        <Input required placeholder="Введите адрес" label="Адрес регистрации" />
        <Input
          required
          placeholder="Введите наименование организации"
          label="Место работы"
        />
        <Button className="mt-4">Оформить</Button>
      </form>
    </Container>
  );
};
