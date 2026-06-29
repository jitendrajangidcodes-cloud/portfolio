import { ImageResponse } from 'next/og';
import { siteConfig } from '@/content/site';
import { profile } from '@/content/profile';

// Build-time generated social card (1200×630). Works with static export.
export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = siteConfig.name;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1442 55%, #0c2f2c 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'linear-gradient(135deg,#6366f1,#14b8a6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            JJ
          </div>
          <span style={{ fontSize: 28, opacity: 0.8 }}>{profile.githubUser}</span>
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 40, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 38, marginTop: 12, color: '#a5b4fc' }}>{profile.title}</div>
        <div style={{ fontSize: 26, marginTop: 28, maxWidth: 900, opacity: 0.75, lineHeight: 1.4 }}>
          {profile.summary}
        </div>
      </div>
    ),
    size
  );
}
