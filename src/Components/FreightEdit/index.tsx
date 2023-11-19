import { faker } from "@faker-js/faker";
import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  Rating,
  TextField,
} from "@mui/material";
import {
  Chat,
  FacebookLogo,
  Heart,
  InstagramLogo,
  MapPin,
  Phone,
  TrendUp,
  User,
  GlobeSimple,
} from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {
  WhatsApp,
  FavoriteBorderOutlined,
  ShareOutlined,
  DriveFileRenameOutline,
  DeleteForeverOutlined,
  TaskAltOutlined,
  VisibilityOffOutlined,
  InsightsRounded,
  LaunchOutlined,
  LanguageOutlined,
  AccountCircleOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "../Freight2/styles.css";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import Facebook from "../../assets/SocialMedia/Facebook.png";
import GoogleMapsIcon from "../../assets/google-maps_icon.svg";
import Verifiqued from "../../assets/verifiqued.svg";

import { FreightProps } from "../Freight2";

export default function FreightEdit({
  id,
  avatar,
  name,
  address2,
  description,
  hateFreight,
  comments,
  hateHeart,
  hateShare,
  hateClick,
  hateSite,
  hateInstagram,
  hateFacebook,
  hateWhatsapp,
  hateAvatar,
  typeWorkBody,
  imageTruckOne,
  imageTruckTwo,
  phone_number_one,
  phone_number_two,
  facebook,
  instagram,
  exclusive,
}: FreightProps) {
  const [anchorStatus, setAnchorStatus] = useState<null | HTMLElement>(null);
  const openStatus = Boolean(anchorStatus);
  const clickcToggleStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorStatus(event.currentTarget);
  };
  const handleCloseStatus = () => {
    setAnchorStatus(null);
  };

  console.log(address2);

  return (
    <div className="col-span-12 grid grid-cols-12 gap-3 border-1 border-black/10 p-5 rounded-2xl shadow-lg">
      <div className="col-span-4 flex flex-col justify-between">
        <Divider textAlign="left" className="!mb-2">
          <p className="text-xs font-semibold opacity-70 ">Dados Principais</p>
        </Divider>
        <div className="flex gap-3">
          <div className="relative h-fit">
            <Avatar
              src={avatar}
              className="!w-14 !h-14 drop-shadow-xl border-3 border-custon-black"
            />
            <img className="absolute bottom-0 right-0" src={Verifiqued} />
          </div>
          <div className="w-full">
            <div className="w-full flex justify-between items-center mb-1 ">
              <div className="flex items-center justify-start gap-1">
                <User size={15} weight="fill" />

                <p className="text-[.9rem] font-semibold opacity-80">
                  {name.substring(0, 14)}...
                </p>
              </div>
              <Button
                size="small"
                variant="outlined"
                color="success"
                endIcon={<TaskAltOutlined />}
                onClick={clickcToggleStatus}
              >
                <p className="!font-bold normal-case">Online</p>
              </Button>
              <Menu
                anchorEl={anchorStatus}
                open={openStatus}
                onClose={handleCloseStatus}
              >
                <MenuItem onClick={handleCloseStatus}>
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    color="inherit"
                    endIcon={<VisibilityOffOutlined />}
                  >
                    <p className="!font-bold normal-case">Desativar</p>
                  </Button>
                </MenuItem>
              </Menu>
              <div />
            </div>
            <div className="flex items-start justify-start gap-1">
              <img src={GoogleMapsIcon} className="mr-[2.5px]" />

              <div className="flex flex-col">
                <p className="text-[.8rem] font-normal opacity-80">
                  {address2?.city} - {address2?.uf}, {address2?.neighborhood},{" "}
                </p>
                <p className="text-[.8rem] font-normal opacity-80">
                  {address2?.street}
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Chat size={15} weight="bold" />

              <p className="text-[.8rem] font-normal opacity-80">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-4 mt-2 ">
          <div className="flex flex-col items-start justify-start gap-1 mb-1">
            <p className="text-[.6rem] font-normal opacity-80 leading-none ">
              Principal
            </p>
            <div className="flex items-center justify-start gap-1">
              <Phone size={15} weight="fill" />
              <p className="text-[.9rem] font-semibold opacity-80 leading-none">
                {phone_number_one.replace(
                  /^(\d{2})(\d)(\d{4})(\d{4})$/,
                  "($1) $2 $3 - $4"
                )}
              </p>
            </div>
          </div>
          {phone_number_two && (
            <div className="flex flex-col items-start justify-start gap-1 mb-1">
              <p className="text-[.6rem] font-normal opacity-80 leading-none ">
                Secundário
              </p>
              <div className="flex items-center justify-start gap-1">
                <Phone size={15} weight="fill" />
                <p className="text-[.9rem] font-semibold opacity-80 leading-none">
                  {phone_number_two.replace(
                    /^(\d{2})(\d)(\d{4})(\d{4})$/,
                    "($1) $2 $3 - $4"
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 ">
        <Divider className="!mb-2">
          <p className="text-xs font-semibold opacity-70 ">Frete</p>
        </Divider>
        <div>
          <div className=" rounded-lg drop-shadow-xl relative ">
            <Swiper
              spaceBetween={10}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="rounded-2xl">
                <div className="overflow-hidden rounded-lg  w-full ">
                  <img
                    className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg  "
                    src={imageTruckOne}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="rounded-2xl">
                <div className="overflow-hidden rounded-lg w-full  ">
                  <img
                    className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-lg  "
                    src={imageTruckTwo}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="col-span-3 flex flex-col gap-2">
        <Divider>
          <p className="text-xs font-semibold opacity-70">Engajamento</p>
        </Divider>
        <div className="flex justify-around">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <FavoriteBorderOutlined
                fontSize="small"
                className="text-red-500"
              />
              <p className="text-xs">
                <span className="font-semibold">{hateHeart}</span> Likes
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center gap-1">
              <ShareOutlined fontSize="small" className="text-gray-500" />
              <p className="text-xs">
                <span className="font-semibold">{hateShare}</span> Shares
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center justify-between">
              <Chat fontSize="small" className="text-custon-black" />
              <AvatarGroup>
                {hateAvatar.map((e) => (
                  <Avatar
                    key={e.id}
                    sx={{ width: 10, height: 10 }}
                    alt="Travis Howard"
                    src={e.avatar}
                  />
                ))}
              </AvatarGroup>
              <p className="underline text-xs opacity-70 decoration-black/70 font-semibold">
                +{comments}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <InstagramLogo
                size={15}
                className="text-pink-500"
                weight="bold"
              />{" "}
              <p className="text-xs">
                <span className="font-semibold">{hateInstagram}</span> Redirect
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <WhatsApp fontSize="small" className="text-green-500" />
              <p className="text-xs">
                <span className="font-semibold text-custon-black">
                  {hateWhatsapp}
                </span>{" "}
                Clicks
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center gap-1">
              <LanguageOutlined
                fontSize="small"
                className="text-custon-black"
              />
              <p className="text-xs">
                <span className="font-semibold">{hateClick}</span> Access
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center gap-1">
              <StarBorderOutlined
                fontSize="small"
                className="text-yellow-500"
              />
              <p className="font-semibold italic text-xs text-custon-black">
                {hateFreight}
              </p>
            </div>
            <Link href={instagram}>
              <div className="flex items-center gap-1">
                <FacebookLogo
                  size={15}
                  className="text-blue-500"
                  weight="bold"
                />
                <p className="text-xs">
                  <span className="font-semibold">{hateFacebook}</span> Redirect
                </p>
                <TrendUp size={10} className="text-green-500" weight="bold" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-2 ">
        <Divider>
          <p className="text-xs font-semibold opacity-70">Ações</p>
        </Divider>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-evenly">
              <IconButton color="secondary">
                <DriveFileRenameOutline />
              </IconButton>
              <IconButton color="error">
                <DeleteForeverOutlined />
              </IconButton>
            </div>
            <Button
              fullWidth
              size="small"
              color={exclusive ? "success" : "warning"}
              variant="contained"
              endIcon={<InsightsRounded />}
            >
              <p className="!font-bold normal-case">
                {exclusive ? "Exclusivo" : "Tornar Exclusivo"}
              </p>
            </Button>
          </div>
          <div>
            <p className=" text-center font-semibold text-[.6rem] normal-case leading-none">
              Criado em
            </p>
            <p className="text-center font-normal text-[.6rem] normal-case leading-none">
              Nov 8, 2023 10:00 AM
            </p>
          </div>
        </div>
        {/* <Button
          fullWidth
          size="large"
          variant="outlined"
          color="secondary"
          endIcon={<MoreVertRounded />}
          onClick={clickcToggleOptions}
        >
          Opções
        </Button> */}
        {/* <Button
          fullWidth
          size="small"
          variant="outlined"
          color="secondary"
          endIcon={<DriveFileRenameOutline />}
        >
           <p className="!font-bold normal-case">

          Editar
           </p>
        </Button>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          color="error"
          endIcon={<DeleteForeverOutlined />}
        >
           <p className="!font-bold normal-case">

          Excluir
           </p>
        </Button>
        <Button
          fullWidth
          size="small"
          color="warning"
          variant="outlined"
          endIcon={<InsightsRounded />}
        >
           <p className="!font-bold normal-case">

          Exclusivo
           </p>
        </Button>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          color="inherit"
          endIcon={<VisibilityOffOutlined />}
        >
           <p className="!font-bold normal-case">

          Desativar
           </p>
        </Button> */}
      </div>
    </div>
  );
}
