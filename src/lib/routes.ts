interface Routes {
  [key: string]: {
    name: string
  }
}

const routes: Routes = {
  'csrf-token': {
    name: 'Csrf Token'
  },
  'legal-entity': {
    name: 'Legal Entity'
  },
  'form-action': {
    name: 'Form action'
  },
  'user': {
    name: 'User'
  }
}

export default routes
