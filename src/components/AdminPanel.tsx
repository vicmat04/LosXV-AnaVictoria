"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaTrash, FaEdit, FaWhatsapp, FaLock, FaSave } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function AdminPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [guests, setGuests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    if (isAuthenticated && isOpen) {
      fetchGuests();
    }
  }, [isAuthenticated, isOpen]);

  const fetchGuests = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("guests").select("*").order("created_at", { ascending: false });
    if (data) setGuests(data);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Ana15") {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de eliminar este invitado?")) {
      await supabase.from("guests").delete().eq("id", id);
      fetchGuests();
    }
  };

  const startEditing = (guest: any) => {
    setEditingId(guest.id);
    setEditName(guest.name);
  };

  const saveEdit = async (id: string) => {
    await supabase.from("guests").update({ name: editName }).eq("id", id);
    setEditingId(null);
    fetchGuests();
  };

  const handleShare = () => {
    let text = "📋 *LISTA DE CONFIRMADOS - XV ANA VICTORIA* 📋\n\n";
    let totalAna = 0;
    let totalMama = 0;

    guests.forEach((g, i) => {
      text += `${i + 1}. ${g.name} (${g.confirmed_to})\n`;
      if (g.confirmed_to === "Ana Victoria") totalAna++;
      else totalMama++;
    });

    text += `\n*TOTAL:* ${guests.length} invitados.`;
    text += `\nCon Ana: ${totalAna} | Con Mamá: ${totalMama}`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0a1208] border border-gold/30 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
      >
        <div className="flex justify-between items-center p-4 border-b border-gold/20 bg-black/20">
          <h2 className="font-serif text-xl text-gold-light flex items-center gap-2">
            <FaLock size={14} /> Panel Secreto
          </h2>
          <button onClick={onClose} className="p-2 text-foreground/50 hover:text-gold transition-colors">
            <FaTimes />
          </button>
        </div>

        {!isAuthenticated ? (
          <div className="p-10 flex flex-col items-center justify-center">
            <p className="text-foreground/70 mb-4 font-sans text-sm text-center">
              Ingresa la contraseña para ver la lista de invitados.
            </p>
            <form onSubmit={handleLogin} className="w-full max-w-xs flex flex-col gap-3">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-gold/30 rounded-xl px-4 py-2 text-gold-light placeholder:text-gold/30 focus:outline-none focus:border-gold text-center"
              />
              <button
                type="submit"
                className="bg-gold/20 hover:bg-gold/30 text-gold-light border border-gold/40 py-2 rounded-xl transition-all"
              >
                Entrar
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="p-4 flex justify-between items-center gap-2 flex-wrap bg-moss-dark/20">
              <span className="text-sm text-gold-light font-medium">
                Total Confirmados: {guests.length}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 px-3 py-1.5 rounded-full text-xs transition-colors"
                title="Compartir por WhatsApp"
              >
                <FaWhatsapp size={14} /> Compartir Info
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {loading ? (
                <p className="text-center text-foreground/50 text-sm">Cargando...</p>
              ) : guests.length === 0 ? (
                <p className="text-center text-foreground/50 text-sm">Aún no hay confirmaciones.</p>
              ) : (
                guests.map((g) => (
                  <div key={g.id} className="bg-black/40 border border-moss-light/20 p-3 rounded-xl flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      {editingId === g.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="w-full bg-transparent border-b border-gold text-gold-light outline-none text-sm"
                          autoFocus
                        />
                      ) : (
                        <p className="font-sans font-medium text-foreground text-sm truncate">
                          {g.name}
                        </p>
                      )}
                      <p className="text-[10px] text-muted uppercase mt-0.5">
                        Con: {g.confirmed_to} • {new Date(g.created_at).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {editingId === g.id ? (
                        <button onClick={() => saveEdit(g.id)} className="p-2 text-[#4ade80] hover:bg-[#4ade80]/10 rounded-full transition-colors">
                          <FaSave size={14} />
                        </button>
                      ) : (
                        <button onClick={() => startEditing(g)} className="p-2 text-gold/60 hover:text-gold hover:bg-gold/10 rounded-full transition-colors">
                          <FaEdit size={14} />
                        </button>
                      )}
                      
                      <button onClick={() => handleDelete(g.id)} className="p-2 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-colors">
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
