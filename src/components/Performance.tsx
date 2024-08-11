const Performance = () => {
  return (
    <section id="performances" className='pt-40 my-40 sssm:px-10 lg:px-20 justify-center items-center w-fit'>
      <h2 className="sections-title mb-10 text-2xl font-bold">Performances</h2>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">
            <span className="text-blue-600 dark:text-blue-300">
              <span className="dynamic-fill-color">
                <span className="dynamic-fill-color-2">
                  <span className="rocket">🚀</span>
                </span>
              </span>
            </span>
            Javascript
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Javascript is a programming language that is primarily used for
            building web applications. It is a versatile language that can be
            used for both front-end and back-end development. JavaScript is
            supported by all modern web browsers and is an essential skill for
            web developers.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">
            <span className="text-blue-600 dark:text-blue-300">
              <span className="dynamic-fill-color">
                <span className="dynamic-fill-color-2">
                  <span className="rocket">🚀</span>
                </span>
              </span>
            </span>
            Python
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Python is a high-level, interpreted programming language that is
            widely used for web development. It is known for its simplicity and
            readability, making it a popular choice for beginners and experienced
            developers alike. Python is supported by all major web browsers and
            is an essential skill for web developers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Performance
