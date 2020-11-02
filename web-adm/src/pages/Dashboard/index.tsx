import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import { BsCardImage } from 'react-icons/bs';
import { RiPagesLine } from 'react-icons/ri';
import { BsTextareaT } from 'react-icons/bs';

import { logout } from '../../store/actions/auth';
import { Container, Menu, Content, Bar, DroppableItem, BarButton } from './styles';

import BannerImage from '../BannerImage';
import BannerTitle from '../BannerTitle';
import SectionTwo from '../SectionTwo';
import SectionThree from '../SectionThree';
import SectionFour from '../SectionFour';

interface DispatchProps {
  logout(): void;
}

const Dashboard: React.FC<DispatchProps> = ({ logout }) => {
  const [ openMenu, setOpenMenu ] = useState(true);
  const [ openMenuMobile, setOpenMenuMobile ] = useState(false);
  const history = useHistory();

  interface TAction {
    icon?: JSX.Element;
    label: string;
    route: string;
  }

  interface TItems {
    icon?: JSX.Element;
    label: string;
    route?: string;
    dropped?: boolean;
    actions?: TAction[];
  }

  const [ drawerList, setDrawerList ] = useState<TItems[]>([
    {
      icon: <RiPagesLine/>,
      label: 'Conteúdo da página',
      dropped: false,
      actions: [
        {
          icon: <BsCardImage/>,
          label: 'Imagem Banner',
          route: '/dashboard/banner_image'
        },
        {
          icon: <BsTextareaT/>,
          label: 'Título Banner',
          route: '/dashboard/banner_title'
        },
        {
          icon: <BsTextareaT/>,
          label: 'Texto "What we do?"',
          route: '/dashboard/wwdo_text'
        },
        {
          icon: <BsTextareaT/>,
          label: 'Texto "Testimonial"',
          route: '/dashboard/testimonial'
        },
        {
          icon: <BsTextareaT/>,
          label: 'Info "Contact us"',
          route: '/dashboard/contactus'
        }
      ]
    }
  ])

  const toggleDropped = (itemIndex: number) => {

    setDrawerList(
      drawerList.map((item, index) => {
        if (index === itemIndex) {
          item.dropped = !item.dropped;
        }
        return item;
      })
    );
  }

  return (
    <Router>
      <Container>
        <Menu open={openMenu} openMobile={openMenuMobile}>
          <div className="logo">
            <h2>Plathanus Administration</h2>
          </div>

          <ul className="menu-list">
            { drawerList.map((item, index) => (
              item.route ? (

                <RouterLink key={index} to={item.route}>
                  <li>
                    { item.icon && ( <span className="icon">{ item.icon }</span> ) }
                    { item.label }
                  </li>
                </RouterLink>

              ) : (

                <DroppableItem key={index} toggle={ item.dropped }>
                  <li onClick={ () => toggleDropped(index) }>
                    <span className="icon">{ item.icon }</span>
                    { item.label }
                    <span className="icon dropdown"><IoMdArrowDropdown/></span>
                  </li>
                  <div className="content">
                    { item.actions?.map((item, index) => (
                        <RouterLink key={index} to={item.route}>
                          <li>
                            { item.icon && ( <div className="icon">{ item.icon }</div> ) }
                            { item.label }
                          </li>
                        </RouterLink>
                      )) 
                    }
                  </div>
                </DroppableItem>
                
              ))
            )}
          </ul>
        </Menu>

        <Content shrink={openMenu} shrinkMobile={openMenuMobile}>
          <Bar>
            <BarButton onClick={ () => {
                setOpenMenu(!openMenu);
                setOpenMenuMobile(!openMenuMobile);
              }}>
              <FiMenu/>
            </BarButton>

            <div className="right">
              <BarButton onClick={ () => {
                logout();
                history.push('/');
              }}>
                <FiLogOut/>
              </BarButton>
            </div>
          </Bar>

          <Switch>
            <Route path="/dashboard/banner_image" exact component={ BannerImage } />
            <Route path="/dashboard/banner_title" exact component={ BannerTitle } />
            <Route path="/dashboard/wwdo_text" exact component={ SectionTwo } />
            <Route path="/dashboard/testimonial" exact component={ SectionThree } />
            <Route path="/dashboard/contactus" exact component={ SectionFour } />
          </Switch>
          
        </Content>
      </Container>
    </Router>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ logout }, dispatch);

export default connect(null, mapDispatchToProps)(Dashboard);