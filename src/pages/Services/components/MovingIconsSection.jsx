import React from 'react';

const MovingIconsSection = () => {
  const iconSrc =
    "https://www.websitedesigningtoronto.ca/71-large_default/logo-animation.jpg";

    const arr = [
        "https://images.ctfassets.net/w8fc6tgspyjz/1DX3J7bZQDSHGAg4GZSxF9/a1b21de0ef0ac9edb93ff3bb8e69d528/LambdaTest.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/2Ae0OlG9ZLAXH1iIdtf4WK/d9463920dd0fe97407f886e60262fa90/TimeDoctor.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/1Kcgno4eGX0zkg8a2h8GrP/aea70392413f5e809923d31b46b00e1d/TimeCamp.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/5LtgL1fTBmrwog4SoLG5cU/fb66748bdbbb56b693c1105a58538829/Tmetric.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/6KTvp0wa009Q7McP4zMsl0/c42593e770052947b8de725acf24864d/Timely.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/3IuGU4rSeYMENI4GfI0LlP/5de70d919c867e32ed9670f0602dd045/Front.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/2HH1PwNYxdKyprPZphuBpM/1ebbb4108f24b84d7ac5b05f8da1add4/Zendesk.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/7Epuqtb7CcM8qgL3gAgWUi/265d6fbb84ece9ceb8d33bb159ea5646/Box.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/3yDYjqaaY9RTOeyqG5VZRZ/68042d03b68809a58d6c118f4a326774/Intercom.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/5eBxlpuMYghqc2mvYj1hMp/7756b241978341207da6ec5877c29268/GoogleHangouts.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/3u2bRvZUReRYvY16LEIJw5/ce6614d93a66d2cd149a1541f8ed70f3/Sunsama.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/6uAkEoLOjwyf5FonLcmXVC/67b6ae60568cf29a09bd99546d4a8e00/Salesforce.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/21JhiA4BRiSfUNjrrSlLrC/e6b4f12167ea9191854fa6c1137cd883/Sleekplan.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/6dcfEyI4XOSTiYzPelss6l/cd97f11b8cc5ad18c85f837251f6b175/Slab.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/24prvCN3r4OVJtv51d4Z83/87383d34e03fd1fe2a1d12651b19b4d6/PractiTest.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/1GUd6oqzFHYT4HvAe0lSva/fa0ad737f0d91d24da5a5f9680628c40/ProBackup.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/5y4eTaFVCgfOiCoX8y5ASt/afef1bea33494e7d0262d17895f01931/Savemyleads.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/7HLk1blaCqcmgqXrzEglXG/c361d038e5f3a7655efceefb8ddf67ab/Memtime.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/6CtPwYFDywx7QZBUnLsWUX/61404991045b784799b75bdfae3a6a4b/Marker.io.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/4EpyxIGVX6YRc5uv9G0msg/88c84005d1603024ba4b37447debf90e/n8n.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/vZSQpjQ7J9psboKSBid1v/ec600c4363f6a178647ccb6db9971867/Monitask.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/xnlhPR1zZQeQPMW2c2zKX/15434f13e886ef413e732db6fb06e387/Merge.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/77Umt2ytcRTWZE53EtmmAy/d0781cedccebaa45ee9bad6611fad23e/Pably.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/1YswRNIpzw3921IDrqL2sQ/2cee15f60f3f5e14fd601d077a27e38c/HelpScout.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/34XGKsD6JAdbGDjU8Pu3XS/1ea63401c01fb9f25cb61af3e4b28188/Miro.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/76K9C0EEPyGAaClhoaOof1/153ed553984c38a20e2270df6bc0966d/Discord.svg",
        "https://images.ctfassets.net/w8fc6tgspyjz/Cn6kMNxdAHaSrt75QDKUq/e953000bd70cf549932ce118d8c2e5ae/MicrosoftTeams.svg",

    ]

  const upperRowIcons = arr
  const lowerRowIcons = arr

  const IconBlock = ({ src, index }) => (
    <div className="flex-shrink-0 w-[4rem] h-[4rem] bg-white rounded-xl shadow-sm border border-gray-200 p-2 mx-2">
      <img src={src} alt={`Icon ${index}`} className="w-full h-full object-contain" />
    </div>
  );

  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Left & Right Fade Overlays */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20"></div>

<div className="text-center mb-12 lg:mb-24">
          <div className="text-purple-600 text-sm font-semibold uppercase tracking-wide mb-2">
            Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Integrate your favorite sales tools.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sync your team's most important sales apps to ClickUp in seconds.
          </p>
        </div>

      <div className=" relative mx-auto">
        {/* Absolute Center Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-48 h-48 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center">
            <img src={iconSrc} alt="Center Icon" className="w-40 h-40 object-contain rounded-full" />
          </div>
        </div>

        {/* Upper Row */}
        <div className="relative mb-3 overflow-hidden group">
          <div className="flex items-center animate-scroll-right-to-left group-hover:paused">
            {upperRowIcons.concat(upperRowIcons).map((src, index) => (
              <IconBlock key={`upper-${index}`} src={src} index={index} />
            ))}
          </div>
        </div>

        {/* Lower Row */}
        <div className="relative overflow-hidden group">
          <div className="flex items-center animate-scroll-left-to-right group-hover:paused">
            {lowerRowIcons.concat(lowerRowIcons).map((src, index) => (
              <IconBlock key={`lower-${index}`} src={src} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right-to-left {
          animation: scroll-right-to-left 30s linear infinite;
        }
        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 30s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default MovingIconsSection;
