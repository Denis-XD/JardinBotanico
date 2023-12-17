import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  LoginOutlined,
  HomeOutlined,
  PictureOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ isAdmin, onLogout }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  const adminMenuItems = [
    {
      label: (
        <Link to="/Agregar/agregar" data-testid="nav-agregar">
          <span className="icono-texto">
            <IoAddCircleOutline className="icono" /> Agregar
          </span>
        </Link>
      ),
      key: "agregar",
    },
    {
      label: (
        <Link to="/Editar/editar" data-testid="nav-editar">
          <span className="icono-texto">
            <FaRegEdit className="icono" /> Editar
          </span>
        </Link>
      ),
      key: "editar",
    },
    {
      label: (
        <button onClick={handleLogout} data-testid="nav-logout" style={{color:'red'}}>
          <HomeOutlined className="icono" /> Salir
        </button>
      ),
      key: "salir",
    },
    {
      label: (
        <span className="icono-texto" data-testid="nav-user">
          <UserOutlined className="icono" />
          {userName}
        </span>
      ),
      key: "usuario",
    },
  ];

  const defaultMenuItems = [
    {
      label: (
        <Link to="/" data-testid="nav-inicio">
          <span className="icono-texto">
            <HomeOutlined className="icono" /> Home
          </span>
        </Link>
      ),
      key: "inicio",
    },
    {
      label: (
        <Link to="/Historia/historia" data-testid="nav-historia">
          <span className="icono-texto">
            <TiDocumentText className="icono" /> Historia
          </span>
        </Link>
      ),
      key: "historia",
    },
    {
      label: (
        <Link to="/Galeria/galeria" data-testid="nav-galeria">
          <span className="icono-texto">
            <PictureOutlined className="icono" /> Galería
          </span>
        </Link>
      ),
      key: "galeria",
    },
    {
      label: (
        <Link to="/Invernaderos/invernaderos" data-testid="nav-invernaderos">
          <span className="icono-texto">
            <HiOutlineHomeModern className="icono" /> Invernaderos
          </span>
        </Link>
      ),
      key: "invernaderos",
    },
    {
      label: (
        <Link to="../Ubicacion/ubicacion" data-testid="nav-ubicacion">
          <span className="icono-texto">
            <SlLocationPin className="icono" /> Ubicación
          </span>
        </Link>
      ),
      key: "ubicacion",
    },
    {
      label: (
        <Link
          to="/Login/login"
          data-testid="nav-login"
          className="menu-item-right"
        >
          <span className="icono-texto">
            <LoginOutlined className="icono" /> Login
          </span>
        </Link>
      ),
      key: "login",
    },
  ];

  const menuItems = isAdmin ? adminMenuItems : defaultMenuItems;
  const loginItemIndex = menuItems.findIndex((item) => item.key === "login");
  if (loginItemIndex !== -1) {
    menuItems[loginItemIndex].className = "menu-item-right";
  }
  const loginItemIndex2 = menuItems.findIndex((item) => item.key === "usuario");
  if (loginItemIndex2 !== -1) {
    menuItems[loginItemIndex2].className = "menu-item-right";
  }

  return <Menu mode="horizontal" items={menuItems} className="custom-navbar" />;
};

export default Navbar;
