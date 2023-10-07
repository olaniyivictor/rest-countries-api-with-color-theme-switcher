# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Neutral

- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

## Typography

### Body Copy

- Homepage Items: 14px
- Detail Page: 16px 

### Fonts

- Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Weights: 300, 600, 800

## Icons

For the icons, you can use a font icon library. Don't worry if the icons that you choose don't look exactly like they do on the design.

Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

 <div className='flex md:gap-[2rem] justify-between items-center content-center gap-[4rem] sm:gap-[15rem]'>
                <div>
                  <h1 className='font-custom font-light'>Filter by Region</h1>
                </div>
                <div>
                  <FaArrowUp className='search-icon' onClick={handClose} />
                </div>
              </div>
            </div>
            {close && (
              <div className={`${theme === 'light' ? 'bg-White' : 'bg-DarkBlue'} flex flex-col w-[63%] md:w-[12rem] h-[9.7rem] p-[1rem] mt-[0.3rem] pl-[1.4rem] font-light font-custom shadow-red-500 md:shadow-lg rounded-[0.5rem] fixed`}>
                <div>
                  {regions.map((region) => (
                    <div key={region}>{region}</div>
                  ))}
                </div>
              </div>
            )}