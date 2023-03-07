import { FormattedMessage, useIntl } from "react-intl";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../parts/Sidebar.css";

const Sidebar = () => {
  const intl = useIntl();

  return (
    <div className=" absolute left-0 rounded-tr-[57px]">
      <ProSidebar>
        <Menu>
          <SubMenu
            className="font-['Helvetica']"
            title={intl.formatMessage({ id: "theme1" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/numerolo">
                <FormattedMessage id="sidebar.theme1" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/astro">
                <FormattedMessage id="sidebar.theme2" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/tarm">
                <FormattedMessage id="sidebar.theme3" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/tri">
                <FormattedMessage id="sidebar.theme4" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/bell">
                <FormattedMessage id="sidebar.theme5" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/ora g">
                <FormattedMessage id="sidebar.theme6" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/orac b">
                <FormattedMessage id="sidebar.theme7" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/j 32">
                <FormattedMessage id="sidebar.theme8" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/ref n">
                <FormattedMessage id="sidebar.theme9" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/chir">
                <FormattedMessage id="sidebar.theme10" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/mouv l">
                <FormattedMessage id="sidebar.theme11" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/int rev">
                <FormattedMessage id="sidebar.theme12" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="font-['Helvetica']"
            title={intl.formatMessage({ id: "theme2" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/int num">
                <FormattedMessage id="sidebar.theme13" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/int tar">
                <FormattedMessage id="sidebar.theme14" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/cul gen">
                <FormattedMessage id="sidebar.theme15" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/int astro">
                <FormattedMessage id="sidebar.theme16" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="font-['Helvetica']"
            title={intl.formatMessage({ id: "theme3" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/com">
                <FormattedMessage id="sidebar.theme17" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/coch">
                <FormattedMessage id="sidebar.theme18" />
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            className="font-['Helvetica']"
            title={intl.formatMessage({ id: "theme4" })}
            style={{ fontSize: 18 }}
          >
            <MenuItem>
              <Link to="/adminpage/nat hum">
                <FormattedMessage id="sidebar.theme19" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/Boudd">
                <FormattedMessage id="sidebar.theme20" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/adminpage/autr">
                <FormattedMessage id="sidebar.theme21" />
              </Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default Sidebar;
