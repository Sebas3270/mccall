import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { router } from './routers/mainRouter'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NextUIProvider>
                    <RouterProvider router={router}/>
                </NextUIProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
