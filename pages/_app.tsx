import '@styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className='page'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
