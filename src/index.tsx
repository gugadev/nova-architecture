import React from 'react';
import ReactDOM from 'react-dom';
import "reflect-metadata";
// import { container } from 'tsyringe';

import App from './App';
import reportWebVitals from './reportWebVitals';
// we need to register this types into di container
// import { HttpProvider } from 'packages/infra/http/HttpProvider';
// import { PolicyDataSource } from 'packages/core/domain/remote/PolicyDataSource';
// import { PolicyRepository } from 'packages/core/repository/PolicyRepository';
// import { LocalStorage } from 'packages/infra/LocalStorage/LocalStorage';
// import { PolicyAdapter } from 'packages/application/adapters/policy-adapter';
// import { HomeViewModel } from 'packages/home/presentation/HomeViewModel';
import './index.css';
import { createDependencyContainer } from 'packages/core/di/inversify.config';

createDependencyContainer();

/**
 * Registering the providers
 */
// container.register('IStorage', {
//   useClass: LocalStorage,
// })
// container.register('IPolicyAdapter', {
//   useClass: PolicyAdapter,
// })
// container.register('IHttpProvider', {
//   useClass: HttpProvider,
// })
// container.register('IPolicyDataSource', {
//   useClass: PolicyDataSource,
// })
// container.register('IPolicyRepository', {
//   useClass: PolicyRepository,
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
