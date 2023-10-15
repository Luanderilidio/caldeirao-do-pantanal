import { Avatar, Select, SelectItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Logo from "../../assets/Logos/Freteminhacidade.png";
import Logo2 from "../../assets/Logos/logo.svg";
import Star from "../../assets/star.png";
import { Dialog } from "@mui/material";
import {
  CaretDown,
  CaretUp,
  Image,
  List,
  MagnifyingGlass,
  Question,
  Truck,
  UserCircle,
  UserCirclePlus,
  X,
  XCircle,
} from "phosphor-react";
import { useState } from "react";
import "animate.css";
import { Transition } from "../../utils/transition";

export default function Header() {
  const [openDropDownCity, setOpenDropDownCity] = useState(false);
  const [openDropDownSize, setOpenDropDownSize] = useState(false);

  const {
    isOpen: isOpenAccount,
    onOpen: onOpenAccount,
    onClose: onCloseAccount,
  } = useDisclosure();

  const {
    isOpen: isOpenDialog,
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
  } = useDisclosure();
  return (
    <div className="grid grid-cols-11 px-4 py-4 sm:py-8 sm:px-8 border-b-[1px] border-black/10">
      <div className="col-span-1 sm:col-span-2 self-center">
        <img className="hidden sm:flex w-[500px]" src={Logo} />
        <img className="flex sm:hidden " src={Logo2} />
      </div>
      {/* <div className="col-span-1" /> */}
      <div className="col-span-9 sm:col-span-5 grid grid-cols-2 sm:mx-10 justify-self-center">
        <div className="hidden relative col-span-1 sm:flex items-center gap-2 border-2 border-black rounded-l-full py-2 px-3 shadow-lg hover:shadow-md ">
          <div className="bg-black p-2 rounded-full">
            <MagnifyingGlass className="text-white" size={15} weight="bold" />
          </div>
          <input
            onClick={() => setOpenDropDownCity(true)}
            onBlur={() => setOpenDropDownCity(false)}
            placeholder="Digite a cidade"
            className="w-full focus:outline-none font-semibold "
          />
          {openDropDownCity && (
            <CaretDown
              size={15}
              weight="bold"
              className=" animate__animated animate__fadeIn animate__faster"
            />
          )}
          {!openDropDownCity && (
            <CaretUp
              size={15}
              weight="bold"
              className=" animate__animated animate__fadeIn animate__faster"
            />
          )}
          {openDropDownCity && (
            <div className="h-[200px] overflow-y-auto absolute -bottom-52 z-10 w-full bg-white border-1 border-black/10 left-0 shadow-lg rounded-2xl animate__animated animate__fadeIn animate__faster">
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hidden relative col-span-1 sm:flex items-center gap-2 border-y-2 border-r-2 border-black  rounded-r-full py-2 px-3 shadow-lg hover:shadow-md ">
          <div className="bg-black p-2 rounded-full">
            <Truck className="text-white" size={15} weight="bold" />
          </div>
          <input
            placeholder="Tamanho do frete"
            onClick={() => setOpenDropDownSize(true)}
            onBlur={() => setOpenDropDownSize(false)}
            className="w-full focus:outline-none font-semibold "
          />
          {openDropDownSize && (
            <CaretDown
              size={15}
              weight="bold"
              className=" animate__animated animate__fadeIn animate__faster"
            />
          )}
          {!openDropDownSize && (
            <CaretUp
              size={15}
              weight="bold"
              className=" animate__animated animate__fadeIn animate__faster"
            />
          )}
          {openDropDownSize && (
            <div className="h-[200px] overflow-y-auto absolute -bottom-52 z-10 w-full bg-white border-1 border-black/10 left-0 shadow-lg rounded-2xl animate__animated animate__fadeIn animate__faster">
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres - MT</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={onOpenDialog}
          className="col-span-2 w-fit flex justify-evenly gap-4 px-4 py-2 sm:hidden border-2 border-black rounded-full items-center"
        >
          <div className="flex items-center gap-2">
            <div className="bg-black p-1 rounded-full">
              <MagnifyingGlass className="text-white" size={10} weight="bold" />
            </div>
            <p className="font-bold text-sm">Cáceres - MT</p>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="bg-black p-1 rounded-full">
              <Truck className="text-white" size={10} weight="bold" />
            </div>
            <p className="font-bold text-sm">Médio</p>
          </div>
        </button>
        {/* <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title luander</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}

        <Dialog
          fullScreen
          open={isOpenDialog}
          onClose={onCloseDialog}
          TransitionComponent={Transition}
        >
          <div className="px-4 py-6 flex flex-col gap-5">
            <p className="text-center font-bold text-2xl">
              Aplique o filtro e encontre os melhores{" "}
              <span className="text-white bg-black px-1 rounded-md mb-5">
                Fretes
              </span>{" "}
              da sua região
            </p>
            <div className="w-full relative flex items-center gap-2 border-2 border-black rounded-full py-2 px-3 shadow-lg hover:shadow-md ">
              <div className="bg-black p-2 rounded-full">
                <MagnifyingGlass
                  className="text-white"
                  size={15}
                  weight="bold"
                />
              </div>
              <input
                onClick={() => setOpenDropDownCity(true)}
                onBlur={() => setOpenDropDownCity(false)}
                placeholder="Digite a cidade"
                className="w-full focus:outline-none font-semibold "
              />
              {openDropDownCity && (
                <CaretDown
                  size={15}
                  weight="bold"
                  className=" animate__animated animate__fadeIn animate__faster"
                />
              )}
              {!openDropDownCity && (
                <CaretUp
                  size={15}
                  weight="bold"
                  className=" animate__animated animate__fadeIn animate__faster"
                />
              )}
              {openDropDownCity && (
                <div className="h-[200px] overflow-y-auto absolute -bottom-52 z-10 w-full bg-white border-1 border-black/10 left-0 shadow-lg rounded-2xl animate__animated animate__fadeIn animate__faster">
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full relative flex items-center gap-2 border-y-2 border-2 border-black  rounded-full py-2 px-3 shadow-lg hover:shadow-md ">
              <div className="bg-black p-2 rounded-full">
                <Truck className="text-white" size={15} weight="bold" />
              </div>
              <input
                placeholder="Tamanho do frete"
                onClick={() => setOpenDropDownSize(true)}
                onBlur={() => setOpenDropDownSize(false)}
                className="w-full focus:outline-none font-semibold "
              />
              {openDropDownSize && (
                <CaretDown
                  size={15}
                  weight="bold"
                  className=" animate__animated animate__fadeIn animate__faster"
                />
              )}
              {!openDropDownSize && (
                <CaretUp
                  size={15}
                  weight="bold"
                  className=" animate__animated animate__fadeIn animate__faster"
                />
              )}
              {openDropDownSize && (
                <div className="h-[200px] overflow-y-auto absolute -bottom-52 z-10 w-full bg-white border-1 border-black/10 left-0 shadow-lg rounded-2xl animate__animated animate__fadeIn animate__faster">
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                    <div className="flex justify-start items-center  gap-2">
                      <Image size={20} weight="bold" />
                      <p className="text-sm font-semibold ">Cáceres - MT</p>
                    </div>
                    <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                      <p className="text-[#005A09] leading-none text-xs font-bold">
                        +315
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex justify-between">
              <button
                onClick={onCloseDialog}
                className="flex items-center gap-2 font-semibold text-white bg-black px-3 py-2 rounded-md shadow-md transition ease-in-out active:scale-95"
              >
                <X className="text-white" size={20} weight="bold" />
                Fechar
              </button>
              <button
                onClick={onCloseDialog}
                className="flex items-center gap-2 font-semibold text-white bg-blue-500 px-3 py-2 rounded-md shadow-md transition ease-in-out active:scale-95"
              >
                <MagnifyingGlass className="text-white" size={20} weight="bold" />
                Filtrar
              </button>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="sm:col-span-3 hidden sm:block mr-3">
        <button className="w-full h-full px-6 border-2 flex items-center justify-center gap-3  rounded-full border-black font-semibold transition ease-in-out hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl ">
          <p>Anuncie seu frete no Site</p>
          <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
            <p className="text-[#005A09] leading-none">Free</p>
            <img className="absolute -bottom-1 right-0" src={Star} />
            <img className="absolute -top-1 left-0" src={Star} />
          </div>
        </button>
      </div>
      <div className="col-span-1 place-self-center sm:justify-self-end relative">
        {/* <button className="flex sm:hidden">
          <List size={30} weight="bold" />
        </button> */}
        <button
          onMouseEnter={onOpenAccount}
          className=" marker:w-fit py-2 px-3 flex justify-center items-center  sm:border-2 border-black rounded-full gap-4 transition ease-in-out hover:scale-105 active:scale-100 sm:shadow-lg hover:shadow-xl"
        >
          <List size={30} weight="bold" />
          <UserCircle className="hidden sm:flex" size={30} weight="fill" />
        </button>
        {isOpenAccount && (
          <div
            onMouseLeave={onCloseAccount}
            className="h-[200px] w-[270px] overflow-y-auto absolute -bottom-52 -left-60 sm:-left-44 z-10 bg-white border-1 border-black/10 shadow-lg rounded-2xl animate__animated animate__fadeIn animate__faster"
          >
            <div className="flex justify-between items-center py-3 px-5 border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer">
              <div
                onClick={onCloseAccount}
                className="w-full flex justify-start items-center  gap-2 "
              >
                <UserCirclePlus size={20} weight="bold" />
                <p className="w-full text-sm font-bold ">Cadastrar-se</p>
              </div>

              <XCircle onClick={onCloseAccount} size={25} className="sm:hidden text-red-500" />
            </div>
            <div
              onClick={onCloseAccount}
              className="flex justify-between items-center py-3 px-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <UserCircle size={20} weight="regular" />
                <p className="text-sm font-normal ">Entrar</p>
              </div>
            </div>
            <div
              onClick={onCloseAccount}
              className="flex justify-between items-center mt-2 py-3 px-5 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <Truck size={20} weight="regular" />
                <p className="text-sm font-normal ">Anuncie seu frete</p>
              </div>
              <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                <p className="text-[#005A09] leading-none text-xs font-bold">
                  Free
                </p>
              </div>
            </div>
            <div
              onClick={onCloseAccount}
              className="flex justify-between items-center py-3 px-5 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <Question size={20} weight="regular" />
                <p className="text-sm font-normal ">Central de ajuda</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
