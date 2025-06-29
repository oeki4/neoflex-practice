import { Container } from "@/shared/ui/Container/Container.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";

interface LoanInputs {
  sum: number;
  term: number;
  income: number;
  address: string;
  organization: string;
  policy: boolean;
}

export const LoansPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<LoanInputs>();
  console.log(watch("policy"));
  const onSubmit: SubmitHandler<LoanInputs> = (data) => console.log(data);
  return (
    <Container className="flex justify-between items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[400px]"
      >
        <Input
          {...register("sum", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={errors?.sum?.message}
          required
          placeholder="Введите сумму"
          label="Сумма"
        />
        <Input
          {...register("term", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={errors?.term?.message}
          required
          placeholder="Введите срок"
          label="Срок"
        />
        <Input
          {...register("income", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={errors?.income?.message}
          required
          placeholder="Введите доход"
          label="Ежемесячный доход"
        />
        <Input
          {...register("address", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          required
          error={errors?.address?.message}
          placeholder="Введите адрес"
          label="Адрес регистрации"
        />
        <Input
          required
          placeholder="Введите наименование организации"
          error={errors?.organization?.message}
          label="Место работы"
          {...register("organization", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
        />
        <Checkbox
          {...register("policy")}
          error={errors?.policy?.message}
          label="Согласен на обработку персональных данных"
          required
        />

        <Checkbox label="Согласен на рассылку" />
        <Button disabled={!getValues("policy")} className="mt-4">
          Оформить
        </Button>
      </form>
    </Container>
  );
};
