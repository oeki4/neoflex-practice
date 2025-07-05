import { Container } from "@/shared/ui/Container/Container.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Modal } from "@/shared/ui/Modal/Modal.tsx";
import { useState } from "react";
import { SuccessIcon } from "@/shared/ui/Icons/SuccessIcon.tsx";
import { CloseIcon } from "@/shared/ui/Icons/CloseIcon.tsx";

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
  const [showModal, setShowModal] = useState(false);
  watch("policy");
  const [formSent, setFormSent] = useState(false);
  const onSubmit: SubmitHandler<LoanInputs> = () => {
    setFormSent(true);
    setShowModal(true);
  };
  return (
    <>
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
      {formSent && showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="w-[400px] opacity-100 top-1/2 left-1/2 box-border -translate-1/2 px-4 py-6 absolute bg-white border-2 rounded-lg  border-blue-500">
            <div className="flex gap-4 items-center relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute cursor-pointer -top-3 -right-1"
              >
                <CloseIcon className="stroke-blue-700 w-5" />
              </button>
              <SuccessIcon className="fill-blue-400 w-16" />
              <p className="font-rubik text-blue-600">
                Заявка оформлена
                <br />
                Банк рассмортит её в течение 1 дня
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
