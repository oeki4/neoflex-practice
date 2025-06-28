import { Container } from "@/shared/ui/Container/Container.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";

export const HomePage = () => {
  return (
    <Container className="flex justify-between items-center">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col sm:flex-row lg:flex-col w-full gap-4">
          <div className="w-full sm:w-[395px] shrink-0 mt-0 lg:-mt-20 min-h-[230px] h-auto sm:h-[230px] flex flex-col justify-between relative p-9">
            <img
              src="/card-bg.png"
              className="top-0 left-0 w-full h-full -z-1 absolute"
              alt="bg"
            />
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-4">
                <p className="font-rubik text-md text-white opacity-70 italic">
                  Баланс
                </p>
                <p className="font-rubik text-3xl text-white">₽5,750,20</p>
              </div>
              <img src="/mastercard-logo.png" alt="mastercard-logo" />
            </div>
            <div className="flex justify-between items-center">
              <p className="font-rubik text-md text-white">
                5282 3456 7890 1289
              </p>
              <p className="font-rubik text-md text-white">09/25</p>
            </div>
          </div>
          <div className="flex sm:flex-col w-full lg:flex-row gap-8 lg:mt-8 sm:justify-center lg:justify-start items-center">
            <Button color="transparent" wrap={false}>
              История
            </Button>
            <Button color="transparent" wrap={false}>
              Поддержка
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src="/decorate.png" alt="decorate-img" />
        </div>
      </div>
    </Container>
  );
};
