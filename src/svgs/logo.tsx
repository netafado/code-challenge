// eslint-disable-next-line react/display-name
const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="25"
    viewBox="0 0 27 25"
    role="img"
  >
    <defs>
      <path
        id="sketch-logo-a"
        d="M6.12869318,2.46533203 L13.5,1.6875 L20.8713068,2.46533203 C20.8713068,2.46533203 26.578125,10.1118164 26.578125,10 C26.578125,10.1118164 13.5,25.3125 13.5,25.3125 L0.421875,10 L6.12869318,2.46533203 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 -1)">
      <mask id="sketch-logo-b" fill="#fff">
        <use xlinkHref="#sketch-logo-a" />
      </mask>
      <use fill="#FDB300" xlinkHref="#sketch-logo-a" />
      <g mask="url(#sketch-logo-b)">
        <g transform="translate(.422 9.112)">
          <polygon fill="#EA6C00" points="5.297 .888 13.078 16.201 0 .888" />
          <polygon
            fill="#EA6C00"
            points="18.375 .888 26.156 16.201 13.078 .888"
            transform="matrix(-1 0 0 1 39.234 0)"
          />
          <polygon
            fill="#FDAD00"
            points="5.297 .888 20.859 .888 13.078 16.201"
          />
        </g>
      </g>
      <g mask="url(#sketch-logo-b)">
        <g transform="translate(.422 1.688)">
          <polygon fill="#FDD231" points="13.078 0 5.707 .778 5.297 8.313" />
          <polygon
            fill="#FDD231"
            points="20.859 0 13.488 .778 13.078 8.313"
            transform="matrix(-1 0 0 1 33.937 0)"
          />
          <polygon
            fill="#FDAD00"
            points="20.449 8.313 26.156 .778 25.748 8.313"
            transform="matrix(-1 0 0 1 46.606 0)"
          />
          <polygon fill="#FDAD00" points="0 8.313 5.707 .778 5.297 8.313" />
          <polygon fill="#FEEEB7" points="13.078 0 5.297 8.313 20.857 8.313" />
        </g>
      </g>
    </g>
  </svg>
)

export default Logo
