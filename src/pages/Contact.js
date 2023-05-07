import React from 'react'
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quas commodi, reiciendis similique, minus animi earum
        molestiae odit recusandae incidunt suscipit deleniti ullam! Nulla, sequi. Officia reprehenderit accusantium ex magni?</p>
    </div>
  )
}
