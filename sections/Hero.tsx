import Image from 'next/image';

import triangle from '@/public/assets/images/triangle.svg';
import woman from '@/public/assets/images/woman.jpg';

const Hero = () => {
  return (
    <section className="">
      <div className="container py-6">
        <h1 className="text-5xl font-bold max-w-[327px] leading-tight tracking-normal pb-5 text-secondary">
          <span className="text-primary">Protect</span> Your Future.
        </h1>
        <p className="text-sm text-slate-500">
          We understand that unexpected events can have a major impact on your
          life. That&apos;s why we&apos;re committed to providing comprehensive
          insurance coverage to protect you and your assets.
        </p>
      </div>
      <div className="relative">
        <div className=" h-[700px] w-[449px]">
          <Image
            src={triangle}
            alt="triangle"
            className="absolute z-1 top-32 "
          />
        </div>
        <div>
          <Image
            src={woman}
            alt="woman"
            className="absolute z-20 top-9 left-24"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
