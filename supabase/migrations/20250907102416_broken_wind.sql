/*
  # Vytvoření tabulky pro rezervace

  1. Nové tabulky
    - `reservations`
      - `id` (uuid, primární klíč, automaticky generovaný)
      - `name` (text, jméno zákazníka)
      - `email` (text, email zákazníka)
      - `phone` (text, telefon zákazníka)
      - `service` (text, vybraná služba)
      - `reservation_date` (timestamptz, datum a čas rezervace)
      - `message` (text, volitelná zpráva od zákazníka)
      - `created_at` (timestamptz, čas vytvoření záznamu)
      - `updated_at` (timestamptz, čas poslední aktualizace)

  2. Bezpečnost
    - Povolení RLS na tabulce `reservations`
    - Zásada pro anonymní uživatele pro vkládání dat (INSERT)
    - Zásada pro čtení dat pouze pro autentizované uživatele
*/

-- Vytvoření tabulky reservations
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  reservation_date timestamptz NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Povolení Row Level Security
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Zásada pro vkládání dat anonymními uživateli (pro formulář na webu)
CREATE POLICY "Enable insert for anonymous users"
  ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Zásada pro čtení dat pouze autentizovanými uživateli (pro administraci)
CREATE POLICY "Enable read for authenticated users"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);

-- Trigger pro automatickou aktualizaci updated_at sloupce
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_reservations_updated_at
  BEFORE UPDATE ON reservations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();