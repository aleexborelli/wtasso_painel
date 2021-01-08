import React from 'react'
import Head from 'next/head'

import WTassoLogo from '../assets/logo_completa_default2.png'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>WTasso - Consultoria e serviços</title>
      </Head>

      <main>
          <div className="container">
            <div className="painel-logo">
            </div>
            <div className="painel-login">teste</div>
          </div>
      </main>
    </div>
  )
}

export default Home
