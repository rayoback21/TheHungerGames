import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  notificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { 
  FilmCreate, 
  FilmList,
  FilmEdit,
  FilmShow
} from "./pages/film";

import { 
  SceneCreate, 
  SceneEdit, 
  SceneList, 
  SceneShow } from "./pages/scene";


  import { 
    CharacterCreate,
    CharacterEdit,
    CharacterList,
    CharacterShow

   } from "./pages/character";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider("http://localhost:8081")}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  
                  {
                    name: "film",
                    list: "/film",
                    create: "/film/create",
                    edit:"/film/edit/:id",
                    show: "/film/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "scene",
                    list: "/scene",
                    create: "/scene/create",
                    edit: "/scene/edit/:id",
                    show:"/scene/show/:id",
                    meta:
                    {
                      canDelete:true,
                    }
                  },
                  {
                    name: "character",
                    list: "/character",
                    create: "/character/create",
                    edit: "/character/edit/:id",
                    show:"/character/show/:id",
                    meta:
                    {
                      canDelete:true,
                    }
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "1oBoic-KuI1Yk-5wVLg9",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={Header}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="blog_posts" />}
                    />
                 
                    <Route path="/film">
                      <Route index element={<FilmList />} />
                      <Route path="create" element={<FilmCreate />} />
                      <Route path="edit/:id" element={<FilmEdit/>}/>
                      <Route path="show/:id" element={<FilmShow/>}/>
                    </Route>
                    <Route path="/scene">
                      <Route index element={<SceneList />} />
                      <Route path="create" element={<SceneCreate />} />
                      <Route path="edit/:id" element={<SceneEdit/>}/>
                      <Route path="show/:id" element={<SceneShow/>}/>
                    </Route>
                    <Route path="/character">
                      <Route index element={<CharacterList />} />
                      <Route path="create" element={<CharacterCreate />} />
                      <Route path="edit/:id" element={<CharacterList/>}/>
                      <Route path="show/:id" element={<CharacterShow/>}/>
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;