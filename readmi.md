@media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 854x480 phones */ }
@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }



     <article className='card'>
        <h3 className=' text-black'>Border Animation</h3>
        <p className=' text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum
          quam mollitia sit aliquam omnis nisi neque nulla, ipsa obcaecati
          eveniet incidunt doloribus quaerat at totam nemo exercitationem,
          officiis quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Necessitatibus, quisquam perferendis
        </p>
        <span className='top'></span>
        <span className='right'></span>
        <span className='bottom'></span>
        <span className='left'></span>
      </article>






.card {
  position: relative;
  border-radius: 10px;
  width: 1000px;
  height: 300px;
  color: #fff;
  background: transparent;
  overflow: hidden;
  border-top: 1px solid rgba(255, 49, 49, 0.5);
  border-right: 1px solid rgba(0, 255, 255, 0.5);
  border-bottom: 1px solid rgba(57, 255, 20, 0.5);
  border-left: 1px solid rgba(255, 255, 113, 0.5);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
}

p {
  font-size: 0.95rem;
  text-align: center;
}

span {
  position: absolute;
  border-radius: 100vmax;
}

.top {
  top: 0;
  left: 0;
  width: 0;
  height: 5px;
  background: linear-gradient(
    90deg,
    transparent 50%,
    rgba(255, 49, 49, 0.5),
    rgb(255, 49, 49)
  );
}

.bottom {
  right: 0;
  bottom: 0;
  height: 5px;
  background: linear-gradient(
    90deg,
    rgb(57, 255, 20),
    rgba(57, 255, 20, 0.5),
    transparent 50%
  );
}

.right {
  top: 0;
  right: 0;
  width: 5px;
  height: 0;
  background: linear-gradient(
    180deg,
    transparent 30%,
    rgba(0, 255, 255, 0.5),
    rgb(0, 255, 255)
  );
}

.left {
  left: 0;
  bottom: 0;
  width: 5px;
  height: 0;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 113),
    rgba(255, 255, 113, 0.5),
    transparent 70%
  );
}

.top {
  animation: animateTop 3s ease-in-out infinite;
}

.bottom {
  animation: animateBottom 3s ease-in-out infinite;
}

.right {
  animation: animateRight 3s ease-in-out infinite;
}

.left {
  animation: animateLeft 3s ease-in-out infinite;
}

@keyframes animateTop {
  25% {
    width: 100%;
    opacity: 1;
  }

  30%,
  100% {
    opacity: 0;
  }
}

@keyframes animateBottom {
  0%,
  50% {
    opacity: 0;
    width: 0;
  }

  75% {
    opacity: 1;
    width: 100%;
  }

  76%,
  100% {
    opacity: 0;
  }
}

@keyframes animateRight {
  0%,
  25% {
    opacity: 0;
    height: 0;
  }

  50% {
    opacity: 1;
    height: 100%;
  }

  55%,
  100% {
    height: 100%;
    opacity: 0;
  }
}

@keyframes animateLeft {
  0%,
  75% {
    opacity: 0;
    bottom: 0;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 100%;
  }
}