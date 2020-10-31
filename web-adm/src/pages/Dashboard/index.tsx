import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link as RouterLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import { BiSlideshow } from 'react-icons/bi';

import { logout } from '../../store/actions/auth';
import { Container, Menu, Content, Bar, DroppableItem, BarButton } from './styles';

import WelcomeContent from '../WelcomeContent';

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
      icon: <BiSlideshow/>,
      label: 'Welcome Content',
      route: '/dashboard/welcome_content'
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
                history.push('/login');
              }}>
                <FiLogOut/>
              </BarButton>
            </div>
          </Bar>

          <Switch>
            <Route path="/dashboard/welcome_content" exact component={ WelcomeContent } />
          </Switch>
          
        </Content>
      </Container>
    </Router>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ logout }, dispatch);

export default connect(null, mapDispatchToProps)(Dashboard);