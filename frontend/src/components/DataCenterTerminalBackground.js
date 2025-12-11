import React, { useRef, useEffect } from 'react';

const DataCenterTerminalBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const pulses = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.5 + Math.random() * 2.5,
      speed: 0.35 + Math.random() * 0.6,
    }));

    const redAlerts = Array.from({ length: 10 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      phase: Math.random() * Math.PI * 2,
    }));

    const amberAlerts = Array.from({ length: 10 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      phase: Math.random() * Math.PI * 2,
    }));

    const gridSpacing = 110;

    const rackPrefixes = ['RACK', 'CAB', 'ROW'];
    const serverPrefixes = ['SRV', 'NODE', 'APP', 'DB', 'API'];
    let rackNames = [];
    let serverNames = [];

    const randomAlpha = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomHex = () => Math.floor(Math.random() * 4096).toString(16).padStart(3, '0');

    const generateRackNames = () => {
      const count = Math.max(1, Math.floor(width / gridSpacing));
      rackNames = Array.from({ length: count }, (_, i) => {
        const prefix = rackPrefixes[Math.floor(Math.random() * rackPrefixes.length)];
        const num = (i + 1).toString().padStart(2, '0');
        return `${prefix}-${num}${randomAlpha()}`;
      });
    };

    const generateServerNames = () => {
      const serversPerRack = Math.floor((height - 120) / 34);
      serverNames = rackNames.map((rack, rackIndex) =>
        Array.from({ length: serversPerRack }, (_, s) => {
          const prefix = serverPrefixes[Math.floor(Math.random() * serverPrefixes.length)];
          const idNum = (s + 1).toString().padStart(2, '0');
          return `${prefix}-${rackIndex + 1}${randomAlpha()}-${idNum}-${randomHex()}`;
        })
      );
    };

    generateRackNames();
    generateServerNames();

    const codeLibrary = [
      ['sudo tail -f /var/log/syslog', 'grep ERROR | head -n 20'],
      ['kubectl get pods', 'kubectl logs -f api-01'],
      ['npm run build', 'CI=true npm test'],
      ['git status', 'git diff --stat'],
      ['htop -d 2', 'pidstat -u 1 5'],
      ['ssh ops@10.0.0.12', 'sudo systemctl restart api'],
      ['df -h /data', 'ls -lh /srv/apps'],
      ['python app.py --env prod', 'pytest -q tests/api'],
      ['docker ps --format "{{.Names}}"', 'docker stats --no-stream'],
      ['journalctl -u web.service -n 30', 'curl -I https://codeb.io'],
      ['ps aux | grep node', 'lsof -i :443'],
      ['SELECT count(*) FROM users;', 'EXPLAIN ANALYZE SELECT * FROM jobs;'],
      ['terraform plan', 'terraform apply -auto-approve'],
      ['ansible-playbook site.yml', 'ansible all -m ping'],
      ['npm run lint', 'npm run format'],
      ['yarn install --frozen-lockfile', 'yarn test --watch=false'],
      ['go test ./...', 'go run cmd/api/main.go'],
      ['cargo test -q', 'cargo fmt --check'],
      ['make build', 'make deploy ENV=prod'],
      ['ssh dev@bastion', 'tmux ls'],
      ['aws sts get-caller-identity', 'aws s3 ls s3://prod-artifacts'],
      ['az account show', 'az webapp restart -g rg-prod -n app01'],
      ['curl -sSL https://api.codeb.io/health', 'wrk -t4 -c64 -d20s https://api.codeb.io'],
      ['openssl s_client -connect api.codeb.io:443', 'nmap -p 22,80,443 api.codeb.io'],
      ['dig api.codeb.io', 'nslookup api.codeb.io'],
      ['git log --oneline -5', 'git blame src/api/index.js | head'],
      ['npm view react version', 'npm outdated'],
      ['psql -h db.prod -U app -c "select now();"', 'pg_dump -Fc db > backup.dump'],
      ['redis-cli info memory', 'redis-cli monitor'],
    ];

    const floatingCode = Array.from({ length: 18 }, () => {
      const snippet = codeLibrary[Math.floor(Math.random() * codeLibrary.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.18 + Math.random() * 0.25,
        opacity: 0.12 + Math.random() * 0.14,
        lines: snippet,
        phase: Math.random() * Math.PI * 2,
      };
    });

    const devicePalette = {
      nic: '#7dd3fc',
      router: '#c084fc',
      switch: '#60a5fa',
      firewall: '#f97316',
    };

    const deviceTypes = ['nic', 'router', 'switch', 'firewall'];

    const devices = Array.from({ length: 14 }, () => {
      const type = deviceTypes[Math.floor(Math.random() * deviceTypes.length)];
      return {
        type,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: -0.15 - Math.random() * 0.2,
        vy: -0.02 + Math.random() * 0.04,
        phase: Math.random() * Math.PI * 2,
      };
    });

    const drawBackground = () => {
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#050607');
      grad.addColorStop(1, '#0f1316');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGrid = () => {
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = '#0dd4a3';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawDots = (t) => {
      for (let x = 0; x < width; x += gridSpacing) {
        for (let y = 0; y < height; y += gridSpacing) {
          const flicker = 0.6 + 0.4 * Math.sin((t + (x + y)) * 0.0025);
          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.shadowColor = '#00ffcc';
          ctx.shadowBlur = 14 * flicker;
          ctx.fillStyle = `rgba(0,255,160,${0.75 * flicker})`;
          ctx.fill();
          ctx.restore();
        }
      }
    };

    const drawRackLabels = () => {
      ctx.save();
      ctx.font = 'bold 12px monospace';
      ctx.fillStyle = 'rgba(0,255,160,0.22)';
      for (let i = 1; i < width / gridSpacing; i++) {
        const label = rackNames[i - 1] || `RACK-${i.toString().padStart(2, '0')}`;
        ctx.fillText(label, i * gridSpacing + 10, 26);
      }
      ctx.restore();
    };

    const drawShelves = () => {
      ctx.save();
      const rackWidth = gridSpacing - 26;
      const shelfHeight = 22;
      const shelfGap = 12;
      const serversPerRack = Math.floor((height - 120) / (shelfHeight + shelfGap));
      for (let i = 0; i < Math.floor(width / gridSpacing); i++) {
        const rackX = i * gridSpacing + 18;
        for (let s = 0; s < serversPerRack; s++) {
          const y = 80 + s * (shelfHeight + shelfGap);
          const grad = ctx.createLinearGradient(rackX, y, rackX + rackWidth, y + shelfHeight);
          grad.addColorStop(0, 'rgba(10,30,35,0.35)');
          grad.addColorStop(1, 'rgba(20,50,55,0.55)');
          ctx.fillStyle = grad;
          ctx.strokeStyle = 'rgba(0,255,200,0.08)';
          ctx.lineWidth = 1;
          ctx.fillRect(rackX, y, rackWidth, shelfHeight);
          ctx.strokeRect(rackX, y, rackWidth, shelfHeight);

          // server id label
          ctx.fillStyle = 'rgba(0,255,180,0.18)';
          ctx.font = '10px monospace';
          const label = serverNames[i]?.[s] || `SRV-${(s + 1).toString().padStart(2, '0')}`;
          ctx.fillText(label, rackX + 8, y + shelfHeight - 6);
        }
      }
      ctx.restore();
    };

    const drawCurves = () => {
      ctx.save();
      ctx.globalAlpha = 0.10;
      ctx.strokeStyle = '#0dd4a3';
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(80 + i * 200, 0);
        ctx.bezierCurveTo(160 + i * 200, height * 0.25, 40 + i * 200, height * 0.65, 120 + i * 200, height);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawScanLines = (t) => {
      const y1 = (t * 0.1) % height;

      const drawLine = (y) => {
        const grad = ctx.createLinearGradient(0, y - 40, 0, y + 40);
        grad.addColorStop(0, 'rgba(0,255,200,0)');
        grad.addColorStop(0.5, 'rgba(0,255,200,0.25)');
        grad.addColorStop(1, 'rgba(0,255,200,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, y - 40, width, 80);
      };

      drawLine(y1);
    };

    const drawPulses = () => {
      ctx.save();
      pulses.forEach((p) => {
        p.y += p.speed;
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18);
        grad.addColorStop(0, 'rgba(0,255,200,0.55)');
        grad.addColorStop(1, 'rgba(0,255,200,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(p.x - 18, p.y - 18, 36, 36);
      });
      ctx.restore();
    };

    const drawAlertLights = (t) => {
      ctx.save();
      const paint = (items, color) => {
        items.forEach((p) => {
          const flicker = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.005 + p.phase));
          ctx.beginPath();
          ctx.arc(p.x, p.y, 5 + 2 * flicker, 0, Math.PI * 2);
          ctx.shadowColor = color;
          ctx.shadowBlur = 16 * flicker;
          ctx.fillStyle = `${color.replace('1)', `${0.55 * flicker})`)}`;
          ctx.fill();
        });
      };

      paint(redAlerts, 'rgba(255,70,70,1)');
      paint(amberAlerts, 'rgba(255,180,80,1)');
      ctx.restore();
    };

    const drawFloatingCode = (t) => {
      ctx.save();
      ctx.font = '12px monospace';
      floatingCode.forEach((c) => {
        c.y += c.speed;
        if (c.y > height + 60) {
          c.y = -80;
          c.x = Math.random() * width;
          const snippet = codeLibrary[Math.floor(Math.random() * codeLibrary.length)];
          c.lines = snippet;
        }
        const flicker = 0.7 + 0.3 * Math.sin(t * 0.003 + c.phase);
        ctx.fillStyle = `rgba(140,255,210,${c.opacity * flicker})`;
        c.lines.forEach((line, idx) => {
          ctx.fillText(line, c.x, c.y + idx * 16);
        });
      });
      ctx.restore();
    };

    const drawDevices = (t) => {
      ctx.save();
      devices.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -80) {
          d.x = width + 60;
          d.y = Math.random() * height;
          d.type = deviceTypes[Math.floor(Math.random() * deviceTypes.length)];
        }

        const wobble = Math.sin(t * 0.002 + d.phase) * 3;
        const color = devicePalette[d.type];
        ctx.fillStyle = `${color}cc`;
        ctx.strokeStyle = `${color}99`;
        ctx.lineWidth = 1.2;

        if (d.type === 'nic') {
          ctx.beginPath();
          ctx.roundRect(d.x, d.y + wobble, 46, 22, 5);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(d.x + 6, d.y + wobble + 6, 18, 4);
          ctx.fillRect(d.x + 6, d.y + wobble + 12, 18, 4);
        } else if (d.type === 'router') {
          ctx.beginPath();
          ctx.arc(d.x, d.y + wobble, 18, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(d.x - 10, d.y + wobble);
          ctx.lineTo(d.x, d.y + wobble - 10);
          ctx.lineTo(d.x + 10, d.y + wobble);
          ctx.lineTo(d.x, d.y + wobble + 10);
          ctx.closePath();
          ctx.stroke();
        } else if (d.type === 'switch') {
          ctx.beginPath();
          ctx.roundRect(d.x, d.y + wobble, 60, 18, 4);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#0f172a';
          for (let i = 0; i < 6; i++) {
            ctx.fillRect(d.x + 6 + i * 8, d.y + wobble + 6, 4, 6);
          }
        } else if (d.type === 'firewall') {
          ctx.beginPath();
          ctx.roundRect(d.x, d.y + wobble, 42, 24, 4);
          ctx.fill();
          ctx.stroke();
          ctx.strokeStyle = '#ffd166';
          ctx.beginPath();
          ctx.moveTo(d.x + 8, d.y + wobble + 16);
          ctx.lineTo(d.x + 14, d.y + wobble + 8);
          ctx.lineTo(d.x + 20, d.y + wobble + 16);
          ctx.lineTo(d.x + 26, d.y + wobble + 10);
          ctx.lineTo(d.x + 34, d.y + wobble + 18);
          ctx.stroke();
        }
      });
      ctx.restore();
    };

    const animate = (t = 0) => {
      drawBackground();
      drawGrid();
      drawDots(t);
      drawRackLabels();
      drawShelves();
      drawCurves();
      drawScanLines(t);
      drawPulses();
      drawAlertLights(t);
      drawFloatingCode(t);
      drawDevices(t);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      generateRackNames();
      generateServerNames();
    };

    let animationFrameId = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
      }}
    />
  );
};

export default DataCenterTerminalBackground;
