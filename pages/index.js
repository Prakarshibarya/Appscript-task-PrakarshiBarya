// pages/index.js
import { useMemo, useRef, useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { props: { products } };
}

export default function Home({ products }) {
  const [showFilters, setShowFilters] = useState(true);
  const [sortKey, setSortKey] = useState("RECOMMENDED");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const SORT_OPTIONS = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  const sortedProducts = useMemo(() => {
    const arr = [...products];
    switch (sortKey) {
      case "NEWEST FIRST":
        return arr.reverse();
      case "PRICE : HIGH TO LOW":
        return arr.sort((a, b) => b.price - a.price);
      case "PRICE : LOW TO HIGH":
        return arr.sort((a, b) => a.price - b.price);
      default:
        return arr;
    }
  }, [products, sortKey]);

  return (
    <>
      <Head>
        <title>Discover Our Products | Appscrip Task</title>
        <meta
          name="description"
          content="Product listing page built with Next.js (SSR), filters and sorting."
        />
      </Head>

      <Navbar />
      <HeroBanner />

      {/* Toolbar */}
      <div className="toolbar container">
        <div className="toolbar-left">
          <strong className="items-count">3425 ITEMS</strong>
          <button type="button" className="back" aria-label="Back">‹</button>
          <button
            type="button"
            className="toggle-filter"
            onClick={() => setShowFilters((v) => !v)}
          >
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className="toolbar-right" ref={sortRef}>
          <button
            type="button"
            className="sort-btn"
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            onClick={() => setSortOpen((o) => !o)}
          >
            {sortKey} <span className="sort-caret">▾</span>
          </button>

          {sortOpen && (
            <ul className="sort-menu" role="listbox" aria-label="Sort products">
              {SORT_OPTIONS.map((opt) => (
                <li key={opt}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={sortKey === opt}
                    className={`sort-item ${sortKey === opt ? "is-active" : ""}`}
                    onClick={() => {
                      setSortKey(opt);
                      setSortOpen(false);
                    }}
                  >
                    {sortKey === opt ? (
                      <span className="tick">✓</span>
                    ) : (
                      <span className="tick-placeholder" />
                    )}
                    <span className="sort-text">{opt}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="content container">
        <div className={`sidebar ${showFilters ? "open" : "closed"}`}>
          <FilterSidebar />
        </div>
        <ProductGrid products={sortedProducts} />
      </main>

      <Footer />
    </>
  );
}
