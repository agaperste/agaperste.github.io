'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const GRID_SIZE = 20
const CELL_SIZE = 20
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_DIRECTION = { x: 1, y: 0 }
const GAME_SPEED = 150

type Position = { x: number; y: number }

export function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION)
  const [food, setFood] = useState<Position>({ x: 15, y: 15 })
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const gameLoopRef = useRef<NodeJS.Timeout>()

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  }, [])

  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    setFood(generateFood())
    setGameOver(false)
    setScore(0)
    setIsPlaying(true)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 })
          break
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 })
          break
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 })
          break
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [direction, isPlaying])

  useEffect(() => {
    if (!isPlaying || gameOver) {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
      return
    }

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        }

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true)
          setIsPlaying(false)
          return prevSnake
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true)
          setIsPlaying(false)
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(generateFood())
          setScore((prev) => prev + 10)
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }, GAME_SPEED)

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
    }
  }, [direction, food, isPlaying, gameOver, generateFood])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = '#1a1a1a'
    ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE)

    // Draw grid
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 0.5
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath()
      ctx.moveTo(i * CELL_SIZE, 0)
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, i * CELL_SIZE)
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE)
      ctx.stroke()
    }

    // Draw food
    ctx.fillStyle = '#ef4444'
    ctx.beginPath()
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2 - 2,
      0,
      2 * Math.PI
    )
    ctx.fill()

    // Draw snake
    snake.forEach((segment, index) => {
      const gradient = ctx.createLinearGradient(
        segment.x * CELL_SIZE,
        segment.y * CELL_SIZE,
        (segment.x + 1) * CELL_SIZE,
        (segment.y + 1) * CELL_SIZE
      )
      gradient.addColorStop(0, index === 0 ? '#22c55e' : '#16a34a')
      gradient.addColorStop(1, index === 0 ? '#16a34a' : '#15803d')
      ctx.fillStyle = gradient
      ctx.fillRect(
        segment.x * CELL_SIZE + 1,
        segment.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      )
    })
  }, [snake, food])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center space-y-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl"
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-bold">Snake Game</h3>
        <div className="text-xl font-mono">Score: {score}</div>
      </div>

      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        className="border-4 border-gray-300 dark:border-gray-600 rounded-lg"
      />

      <div className="flex gap-4">
        {!isPlaying && !gameOver && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold shadow-lg"
          >
            Start Game
          </motion.button>
        )}

        {gameOver && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-xl font-bold text-red-500">Game Over!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetGame}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-lg"
            >
              Play Again
            </motion.button>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Use arrow keys to control the snake
      </p>
    </motion.div>
  )
}
