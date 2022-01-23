import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

import styles from './styles.module.scss';

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export default function HeroSpring() {
  const [open, toggle] = useState(false)
  const [{ freq, factor, scale, opacity }] = useSpring(() => ({
    reverse: open,
    from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
    to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
    config: { duration: 3000 },
  }))

  return (
    <div className={styles.container} onClick={() => toggle(!open)}>
      <animated.svg className={styles.svg} style={{ scale, opacity }} viewBox="0 0 1632 289">
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <animated.path
       d="M116.228 259L110.468 241.72L116.228 212.92V55.096H179.588V164.824L176.708 204.28H182.468L234.02 201.4L254.468 198.52L279.812 240.568L265.7 259H116.228ZM331.778 261.88C318.914 261.88 308.45 258.904 300.386 252.952C292.514 246.808 288.578 236.152 288.578 220.984C288.578 206.968 293.186 196.408 302.402 189.304C311.81 182.008 324.482 178.36 340.418 178.36C349.058 178.36 355.97 179.224 361.154 180.952C366.338 182.488 370.274 184.024 372.962 185.56L374.978 184.12C374.978 178.168 373.922 173.752 371.81 170.872C369.698 167.8 364.61 166.264 356.546 166.264C349.442 166.264 342.146 167.032 334.658 168.568C327.362 169.912 320.45 171.736 313.922 174.04C307.394 176.152 301.826 178.456 297.218 180.952V129.112C300.29 128.152 305.186 127 311.906 125.656C318.626 124.312 326.69 123.16 336.098 122.2C345.506 121.048 355.586 120.472 366.338 120.472C384.386 120.472 398.69 122.68 409.25 127.096C419.81 131.32 427.298 137.56 431.714 145.816C436.322 153.88 438.625 163.576 438.625 174.904V213.208L444.386 242.296L438.625 259.288H377.858V245.176L374.978 243.736C371.906 248.152 366.626 252.28 359.138 256.12C351.842 259.96 342.722 261.88 331.778 261.88ZM364.322 224.152C367.202 224.152 369.602 223.672 371.522 222.712C373.442 221.752 374.594 221.176 374.978 220.984V214.648C374.978 211.768 374.114 209.272 372.386 207.16C370.658 205.048 368.066 203.992 364.609 203.992C361.538 203.992 358.658 204.856 355.969 206.584C353.281 208.12 351.938 210.904 351.938 214.936C351.938 221.08 356.066 224.152 364.322 224.152ZM527.539 261.88C511.219 261.88 497.875 260.536 487.507 257.848C477.139 254.968 468.787 251.896 462.451 248.632V199.96C470.515 204.76 479.827 208.6 490.387 211.48C500.947 214.36 510.451 215.8 518.899 215.8C521.971 215.8 524.083 215.416 525.235 214.648C526.387 213.88 526.963 212.728 526.963 211.192C526.963 209.656 525.043 208.024 521.203 206.296C517.555 204.376 511.219 202.072 502.195 199.384C495.091 197.08 488.275 194.584 481.747 191.896C475.219 189.208 469.939 185.656 465.907 181.24C461.875 176.824 459.859 170.968 459.859 163.672C459.859 152.536 462.643 143.8 468.211 137.464C473.971 131.128 481.843 126.712 491.827 124.216C502.003 121.528 513.523 120.184 526.387 120.184C533.683 120.184 540.979 120.568 548.275 121.336C555.763 122.104 560.851 122.68 563.539 123.064L590.323 137.464L577.363 176.92L532.435 165.976C526.291 165.976 523.219 167.416 523.219 170.296C523.219 173.56 527.635 176.344 536.467 178.648C545.491 181.144 554.323 183.832 562.963 186.712C571.603 189.592 578.707 193.528 584.275 198.52C589.843 203.32 592.627 210.04 592.627 218.68C592.627 233.272 586.867 244.12 575.347 251.224C563.827 258.328 547.891 261.88 527.539 261.88ZM677.15 261.88C660.254 261.88 647.87 258.424 639.998 251.512C632.126 244.6 628.19 234.52 628.19 221.272V167.128H604.286V131.128L625.31 117.016L645.758 81.304H691.262V123.064H734.462V169.144H691.262V213.496L734.462 213.208V253.24C734.462 253.24 732.734 253.72 729.278 254.68C725.822 255.448 721.214 256.408 715.454 257.56C709.886 258.712 703.742 259.672 697.022 260.44C690.302 261.4 683.678 261.88 677.15 261.88ZM832.504 259V101.464L829.624 72.664L832.504 55.096H895.864V133.144H956.056V55.096H1019.42V163.384L1022.3 183.256V259H956.056V185.848H895.864V206.008L898.744 259H832.504ZM1124.55 261.88C1109.77 261.88 1096.33 259.768 1084.23 255.544C1072.33 251.128 1062.83 243.832 1055.72 233.656C1048.81 223.288 1045.35 209.08 1045.35 191.032C1045.35 178.36 1047.47 167.512 1051.69 158.488C1056.11 149.464 1061.96 142.168 1069.26 136.6C1076.55 130.84 1084.71 126.712 1093.74 124.216C1102.76 121.528 1112.07 120.184 1121.67 120.184C1133.77 120.184 1143.85 120.952 1151.91 122.488C1160.17 124.024 1166.79 125.752 1171.79 127.672C1176.78 129.592 1180.62 131.32 1183.31 132.856L1197.71 178.648L1191.95 196.504H1108.43C1109.19 201.88 1111.98 206.488 1116.78 210.328C1121.58 213.976 1129.93 215.8 1141.83 215.8C1153.16 215.8 1162.57 214.552 1170.06 212.056C1177.55 209.56 1182.92 207.64 1186.19 206.296V250.648C1182.35 252.76 1177.07 254.68 1170.35 256.408C1163.63 258.136 1156.23 259.48 1148.17 260.44C1140.3 261.4 1132.43 261.88 1124.55 261.88ZM1107.56 177.784L1136.94 172.312L1134.35 163.096C1131.66 161.56 1128.39 160.792 1124.55 160.792C1118.22 160.792 1113.71 162.52 1111.02 165.976C1108.52 169.432 1107.37 173.368 1107.56 177.784ZM1219.44 259V168.856L1213.4 140.056L1219.44 122.776H1270.13L1275.89 129.4C1275.89 129.4 1276.95 128.632 1279.06 127.096C1281.36 125.368 1284.53 123.736 1288.56 122.2C1292.6 120.664 1297.3 119.896 1302.68 119.896C1306.52 119.896 1310.36 120.184 1314.2 120.76C1318.04 121.336 1321.01 122.104 1323.12 123.064L1353.36 150.424L1328.88 190.168L1290.87 168.568L1282.23 171.448V259H1219.44ZM1431.34 261.88C1407.91 261.88 1389.29 256.312 1375.46 245.176C1361.64 234.04 1354.73 215.992 1354.73 191.032C1354.73 165.88 1361.64 147.832 1375.46 136.888C1389.29 125.752 1407.91 120.184 1431.34 120.184C1455.53 120.184 1474.25 125.752 1487.5 136.888C1500.74 147.832 1507.37 165.88 1507.37 191.032C1507.37 215.992 1500.74 234.04 1487.5 245.176C1474.25 256.312 1455.53 261.88 1431.34 261.88ZM1431.34 215.8C1434.98 215.8 1437.96 214.36 1440.26 211.48C1442.57 208.408 1443.72 201.592 1443.72 191.032C1443.72 180.28 1442.57 173.464 1440.26 170.584C1438.15 167.704 1435.18 166.264 1431.34 166.264C1427.69 166.264 1424.62 167.704 1422.12 170.584C1419.62 173.464 1418.38 180.28 1418.38 191.032C1418.38 201.592 1419.62 208.408 1422.12 211.48C1424.62 214.36 1427.69 215.8 1431.34 215.8Z" fill="#69ACA8"
          />
        </g>
      </animated.svg>
    </div>
  )
}
